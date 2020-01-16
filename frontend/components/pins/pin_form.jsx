import React from 'react';
import { withRouter } from 'react-router-dom';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {createPinning} from '../../actions/pin_actions';

class PinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            url: '',
            description: '',
            boardId: '',
            photoFile: null, 
            photoUrl: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards(this.props.currentUser.id)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result});
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('pin[title]', this.state.title);
        formData.append('pin[url]', this.state.url);
        formData.append('pin[description]', this.state.description);
        formData.append('pin[photo]', this.state.photoFile);
        formData.append('pin[author_id]', this.props.currentUser.id);
        formData.append('pin[board_ids][]', this.state.boardId);

        this.props.processForm(formData)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        if (this.props.currentUser.email) {
            const username = this.props.currentUser.email.split("@")[0] 
            const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : null;
            return (
                <div className="pin-form-container">
                    <form onSubmit={this.handleSubmit} className="pin-form-box">
                        <div className="pin-dd">
                            <select
                                // value={this.state.board ? this.state.board : "Select"}
                                onChange={(e) => this.setState({ boardId: e.target.value })}>
                                <option value="Choose a location" selected disabled>Select</option>
                                {
                                    this.props.boards.map(board => <option value={board.id}>{board.title}</option>)
                                }
                            </select>
                        </div>
                        <div id="space"></div>
                        <input type="submit" value="Save" className="pin-submit" />
                        {this.renderErrors()}
                        <div className="pin-form">
                            <input type="file" onChange={this.handleFile} id="media-upload-input" accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp"/>
                            <div id="pic-text"><div id="text"><FontAwesomeIcon icon={faArrowCircleUp} /><br/> Drag and drop or click to upload</div></div>
                            {preview ? <div id="preview">{preview}</div> : null}
                            <input type="text"
                                placeholder="Add your title"
                                value={this.state.title}
                                onChange={this.update('title')}
                                id="pin-title"
                            />
                            <div id="pin-user">
                                <img id="pin-profile-icon" src={this.props.currentUser.imageUrl} /> {username}
                            </div> <br/>
                            <input type="text"
                                placeholder="Tell everyone what your Pin is about"
                                value={this.state.description}
                                onChange={this.update('description')}
                                id="pin-description"
                            />
                            <input type="text"
                                placeholder="Add a destination link"
                                value={this.state.url}
                                onChange={this.update('url')}
                                id="pin-url"
                            />
                        </div>
                    </form>
                </div>
            );
        } else {
            return null;
        }
        
    }
}

export default withRouter(PinForm);
