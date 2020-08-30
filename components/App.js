//App.js
import React, {Component} from 'react'
//Distpatcher
import AppDispatcher from '../dispatcher/AppDispatcher'
//Store
import AppStore from '../stores/AppStore'
//Components
import Nav from './Partials/Nav'
import Footer from './Partials/Footer'
import Loading from './Partials/Loading'

export default class App extends Component{
    //Add Change listeners to stores
    componentDidMount(){
        AppStore.addChangeListener(this.onChnage.bind(this))
    }
    //Remove change listeners from stores
    componentWillUnmount(){
        AppStore.removeChangeListner(this.onChnage.bind(this))
    }
    _onchange(){
        this.setState(AppStore)
    }
    getStore(){
        AppDispatcher.dispatch({
            action:'get-app-store'
        })
    }
    render(){
        const data =AppStore.data
        //Show loading for browser
        if(!data.ready){
            document.body.className=''
            this.getStore()
            let style={
                marginTop:120
            }
            return (
                <div className="container text-center" style={style}>
                    <Loading/>
                </div>
            )
        }
        //Server first
        const Routes =React.cloneElement(this.props.children,{data:data})
        return(
            <div>
                <Nav data={data}/>
                {Routes}
                <Footer data={data}/>
            </div>
        )
    }
}