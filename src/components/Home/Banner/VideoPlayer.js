import { Modal, Button } from 'react-bootstrap'
import React from 'react'
import ReactPlayer from 'react-player'

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    abu
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const VideoPlayer = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>   
            </Modal.Header>
            <Modal.Body>
                <ReactPlayer
                style={{margin: "auto"}}
                    playing={true}
                    controls = {true}
                url='https://www.youtube.com/watch?v=k6ru0sfMktI' />
            </Modal.Body>
            
        </Modal>
    )
}

export default VideoPlayer