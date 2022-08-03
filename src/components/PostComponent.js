import React, { Component } from 'react';
import DaumPostcode from 'react-daum-postcode';

class PostComponent extends Component {
    onCompletePost= (data) => {
        console.log(data.address);
    }

    render() {
        const postStyle = {
            position :'fixed',
            top : '50%',
            left: '50%',
            width : '400px',
            height :'500px',
            backgroundColor:'#fff',
            zIndex:'2',
            border:'1px solid #ccc',
            marginTop : '-250px',
            marginLeft : '-250px'
        }
        return (
            <div>
                <DaumPostcode style={postStyle} onComplete={this.onCompletePost}/>
            </div>
        );
    }
}

export default PostComponent;