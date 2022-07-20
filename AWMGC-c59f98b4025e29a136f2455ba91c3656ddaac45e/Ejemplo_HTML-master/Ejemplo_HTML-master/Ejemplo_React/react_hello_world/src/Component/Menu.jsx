import React from "react";
import './menu.css';

class Menu extends React.Component{
    
    render(){
        const { name, avatarURL} = this.props;
        console.log(this.props);
        return(
            <div className="menu">
                <div className="options">
                    <a href="#" className="link">Home</a>
                    <a href="#" className="link">Person Card</a>
                    <a href="#" className="link">Conctact Us</a>

                </div>
                <div className="user">
                    <p id="user" style={{color:"white", fontWeight:"bold"}}>{name}</p>
                    <img id="avatar" src={avatarURL} alt="" className="img1"></img>
                    {this.props.children}

                </div>

            </div>
             

        );
    }
    

}
export default Menu;
