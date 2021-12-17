import React from 'react';
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default class VideoPlayer extends React.Component {
    componentDidMount() {
        console.log('VideoPlayer', this.props)

        // instantiate Video.js
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this)
        });
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    render() {
        return (
            <div>
                <div data-vjs-player>
                    <video ref={node => this.videoNode = node} className={this.props.className + " video-js"}></video>
                </div>
            </div>
        )
    }
}