import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

class Avatar extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			selectedFile: null,
			selectedFiles: null
		}
	}

	updateUserAvatar = () => {
		const id = this.props.usersId
		console.log(id)
		const avatar = {
			avatar: this.state.selectedFile
		}
		console.log(avatar)
        axios.put('/api/users/updateUserAvatar/'+ id, avatar)
		.then(res => console.log(res));

		window.location = '/profile'
	}

	singleFileChangedHandler = ( event ) => {
		this.setState({
			selectedFile: event.target.files[0]
		});
	};

	singleFileUploadHandler = ( event ) => {
		const data = new FormData();
// If file selected
		if ( this.state.selectedFile ) {
			data.append( 'profileImage', this.state.selectedFile, this.state.selectedFile.name );
			axios.post( '/api/profile/profile-img-upload', data, {
				headers: {
					'accept': 'application/json',
					'Accept-Language': 'en-US,en;q=0.8',
					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
				}
			})
				.then( ( response ) => {
					if ( 200 === response.status ) {
						// If file size is larger than expected.
						if( response.data.error ) {
							if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
								this.ocShowAlert( 'Max size: 2MB', 'red' );
							} else {
								console.log( response.data );
// If not the given file type
								this.ocShowAlert( response.data.error, 'red' );
							}
						} else {
							// Success
							let fileName = response.data.location;
							console.log( 'filedata', fileName );
							this.ocShowAlert( 'File Successfully Uploaded', '#3089cf' );
							this.setState({
								selectedFile: fileName
							})
							this.updateUserAvatar();
						}
					}
				}).catch( ( error ) => {
				// If another error
				this.ocShowAlert( error, 'red' );
			});
		} else {
			// if file not selected throw error
			this.ocShowAlert( 'Please upload file', 'red' );
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
				<p>{this.props.usersId}</p>
				{/* For Alert box*/}
				<div id="oc-alert-container"></div>
				{/* Single File Upload*/}
				<div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
					<div className="card-header">
						<h5 style={{ color: '#555', marginLeft: '12px' }}>Avatar Image Upload</h5>
					</div>
					<div className="card-body">
						<p className="card-text">Please upload an image for your profile (max size: 2MB)</p>
						<input type="file" onChange={this.singleFileChangedHandler}/>
						<div className="mt-5">
							<button className="btn btn-info" onClick={this.singleFileUploadHandler}>Upload!</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Avatar;