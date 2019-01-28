import * as React from 'react';
import { CenterSection } from '../../common';

export class PhotographyScreen extends React.Component {

    render() {
        return (
            <CenterSection
                {...this.props}
            >
                <div className="photo-screen-container">
                    <h1>PhotographyScreen</h1>
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Card Title</span>
                                    <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#memes">This is a link</a>
                                    <a href="#killme">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CenterSection>
        );
    }
}