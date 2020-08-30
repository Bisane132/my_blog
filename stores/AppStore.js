// AppStore.js
import {EventEmitter} from 'events'
import _ from 'lodash'
export default _.extend({},EventEmitter.prototype,{
    //Intial Data
    data:{
        ready:false,
        globals:{},
        pages:[],
        item_num:5
    },
    // Emit change event
    emitChange:function(){
        this.emit('change')
    },
    //Add change listener
    addChangeListener:function(callback){
        this.on('change',callback)
    },
    //Remove change Listner
    removeChangeListner:function(callback){
        this.removeListner('change',callback)
    }

})