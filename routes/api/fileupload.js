const express = require( 'express' );
const aws = require( 'aws-sdk' );
const multerS3 = require( 'multer-s3' );
const multer = require('multer');
const path = require( 'path' );
require('dotenv').config();
const router = express.Router();

/***********************************************
 PROFILE IMAGE STORING STARTS
 ***********************************************/
const s3 = new aws.S3({
	accessKeyId: process.env.accessKeyId,
	secretAccessKey: process.env.secretAccessKey,
	Bucket: process.env.Bucket
});

/***********************************************
 SINGLE IMAGE UPLOADING
 ***********************************************/
const profileImgUpload = multer({
	storage: multerS3({
		s3: s3,
		bucket: 'retrotrade',
		acl: 'public-read',
		key: function (req, file, cb) {
			cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
		}
	}),
	limits:{ fileSize: 2000000 }, // 2 MB
	fileFilter: function( req, file, cb ){
		checkFileType( file, cb );
	}
}).single('profileImage');

/***********************************************
 CONTROL FILE TYPES ALLOWED
 ***********************************************/
function checkFileType( file, cb ){
	// Allowed ext
	const filetypes = /jpeg|jpg|png|gif/;
	// Check ext
	const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
	// Check mime
	const mimetype = filetypes.test( file.mimetype );
	if( mimetype && extname ){
		return cb( null, true );
	} else {
		cb( 'Error: You can only upload jpeg, jpg, png, and gif files.')
	}
}

/**
 * @route POST /api/profile/profile-img-upload
 * @desc Upload post image
 * @access public
 */
router.post( '/profile-img-upload', ( req, res ) => {
	profileImgUpload( req, res, ( error ) => {
		console.log( 'requestOkokok', req.file );
		console.log( 'error', error );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.file === undefined ){
				console.log( 'Error: Oops! No image was selected for upload.' );
				res.json( 'Error: Oops! No image was selected for upload.' );
			} else {
				// If Success
				const imageName = req.file.key;
				const imageLocation = req.file.location;
// Save the file name into database into profile model
				res.json( {
					image: imageName,
					location: imageLocation
				} );
			}
		}
	});
});

/***********************************************
 MULTI IMAGE UPLOAD (MAX OF 4 ALLOWED)
 ***********************************************/
const uploadsItemGallery = multer({
	storage: multerS3({
		s3: s3,
		bucket: 'retrotrade',
		acl: 'public-read',
		key: function (req, file, cb) {
			cb( null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
		}
	}),
	limits:{ fileSize: 5000000 }, // 5 MB
	fileFilter: function( req, file, cb ){
		checkFileType( file, cb );
	}
}).array( 'galleryImage', 4 );
/**
 * @route POST /api/profile/multiple-file-upload
 * @desc Upload Item Gallery images
 * @access public
 */
router.post('/multiple-file-upload', ( req, res ) => {
	uploadsItemGallery( req, res, ( error ) => {
		console.log( 'files', req.files );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.files === undefined ){
				console.log( 'Error: Oops! No image file was selected for upload.' );
				res.json( 'Error: Oops! No image file was selected for upload.' );
			} else {
				// If Success
				let fileArray = req.files,
					fileLocation;
				const galleryImgLocationArray = [];
				for ( let i = 0; i < fileArray.length; i++ ) {
					fileLocation = fileArray[ i ].location;
					console.log( 'filenm', fileLocation );
					galleryImgLocationArray.push( fileLocation )
				}
				// Save the file name into database
				res.json( {
					filesArray: fileArray,
					locationArray: galleryImgLocationArray
				} );
			}
		}
	});
});

module.exports = router;