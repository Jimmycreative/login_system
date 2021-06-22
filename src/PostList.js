import React, {Component} from "react"
import axios from "axios"



class PostList extends Component {
    constructor() {
        super()
        this.state= {
            posts: [],
            errorMsg: ''
        }


    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retrieving data'})
        
        })
    }
    render() {
        const itemStyle =
        {
            border: '1px dashed #ccc',
            margin: '5px',
            padding: '5px',
            boxShadow: '0 0 5px #ccc',
            textAlign: "center"
        }
        const center = {
            display: "block",
            border: "1,dashed",
            textAlign: "center",
            
        }
        
        return (
                
                <div >
                        <div style={center}>
                            <img src="logo.png" alt="" height="200" width="200" />
                            <br/>
                            <a  href="https://moyyn.com">Moyyn </a>
                        </div>
                            
                    
                        {this.state.posts.length ?
                        this.state.posts.map(post => 
                        <div style={itemStyle}>
                            <h3 >Name:{post.name}</h3>
                            <p>Email:{post.email}</p>
                            <p>City:{post.address.city}</p>
                                
                            
                        </div>):null}
                    
                    {this.state.errorMsg ? <div>{this.state.errorMsg}</div> : null}
                </div>
            
        )

    }
}
export default PostList