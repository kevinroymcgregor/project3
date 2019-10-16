import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

class Items extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			selectedFile: null,
			selectedFiles: null
		}
	}

	multipleFileChangedHandler = (event) => {
		this.setState({
			selectedFiles: event.target.files
		});
		console.log( event.target.files );
	};

	multipleFileUploadHandler = () => {
		const data = new FormData();
		let selectedFiles = this.state.selectedFiles;
// If file selected
		if ( selectedFiles ) {
			for ( let i = 0; i < selectedFiles.length; i++ ) {
				data.append( 'galleryImage', selectedFiles[ i ], selectedFiles[ i ].name );
			}
			axios.post( '/api/profile/multiple-file-upload', data, {
				headers: {
					'accept': 'application/json',
					'Accept-Language': 'en-US,en;q=0.8',
					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
				}
			})
				.then( ( response ) => {
					console.log( 'res', response );
					if ( 200 === response.status ) {
						// If file size is larger than expected.
						if( response.data.error ) {
							if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
								this.ocShowAlert( 'Max size: 5MB', 'red' );
							} else if ( 'LIMIT_UNEXPECTED_FILE' === response.data.error.code ){
								this.ocShowAlert( 'A maxium of 4 images allowed', 'red' );
							} else {
								// If not the given ile type
								this.ocShowAlert( response.data.error, 'red' );
							}
						} else {
							// Success
							let fileName = response.data;
							console.log( 'fileName', fileName );
							this.ocShowAlert( 'File Successfully Uploaded', '#3089cf' );
						}
					}
				}).catch( ( error ) => {
				// If another error
				this.ocShowAlert( error, 'red' );
			});
		} else {
			// if file not selected throw error
			this.ocShowAlert( 'Please upload at least 1 image file', 'red' );
		}
	};

	// ShowAlert Function
	ocShowAlert = ( message, background = '#3089cf' ) => {
		let alertContainer = document.querySelector( '#oc-alert-container' ),
			alertEl = document.createElement( 'div' ),
			textNode = document.createTextNode( message );
		alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
		$( alertEl ).css( 'background', background );
		alertEl.appendChild( textNode );
		alertContainer.appendChild( alertEl );
		setTimeout( function () {
			$( alertEl ).fadeOut( 'slow' );
			$( alertEl ).remove();
		}, 3000 );
	};

	render() {
		console.log( this.state );
		return(
			<div className="container">
				{/* For Alert box*/}
				<div id="oc-alert-container"></div>
				{/* Multiple File Upload */}
				<div className="card border-light mb-3" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
					<div className="card-header">
						<h5 style={{ color: '#555', marginLeft: '12px' }}>Select item images for upload</h5>
					</div>
					<div className="card-body">
						<p className="card-text">Please upload the Images for your gallery (max size: 5MB)</p>
						<input type="file" multiple onChange={this.multipleFileChangedHandler} />
						<div className="mt-5">
							<button className="btn btn-info" onClick={this.multipleFileUploadHandler}>Upload!</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Items;