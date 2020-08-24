import React,{Component}from 'react';

// function Hello(props){
//     return <div style = {{color:props.color}}>
//         {/* {props.isSpecial ? <b>*</b> : null} 밑에랑 같은거  */}
//         {props.isSpecial && <b>*</b>}
//             안녕하세요 {props.name}
//         </div>
// }
// Hello.defaultProps ={
//     name : "이름없음",
//     color:"skyblue",
//     isSpecial:false
// }
// export default Hello


class Hello extends Component{
    static defaultProps = {
        name:  '이름없음'
    }
    render(){
        const {color,name,isSpecial} = this.props;
        return (
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        )
    }
}
// Hello.defaultProps = {
//     name:'이름없음',
//     color:"skyblue",

// }
export default Hello ;