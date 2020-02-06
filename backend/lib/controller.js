//controller.js
import MessageModel from './model'

let messageApp;
if (process.env.npm_lifecycle_event == "test") {
  messageApp = new MessageModel(`/\///json/\//testMessages.json`)
  } else {
    messageApp = new MessageModel(`/\///json/\//messages.json`)
    }

    function getAll(){
      return new Promise((resolve, reject) => {
        var result = messageApp.getAll()
        if (result !== []) {
          resolve(result)
        } else {
          reject(result)
        }
      })
    }

    function post(content){
      return new Promise((resolve, reject) => {
        let message = messageApp.post(content)
        if (message.length !== 0) {
          resolve(message)
        } else {
          reject("You can't post an empty message")
        }
      })
    }


    function deleteMessage(id){
      return new Promise((resolve, reject) => {
        let result = messageApp.delete(id)
        if (result !== 'Message not found in database') {
          resolve(result)
        } else {
          reject(result)
        }
      })
    }

    function getSingleMessage(id){
      return new Promise((resolve, reject) => {
        let result = messageApp.get(id)
        if (result !== []) {
          resolve(result)
        } else {
          reject(result)
        }
      })
    }
    function updateMessage(id, content){
      return new Promise((resolve, reject) => {
        let result = messageApp.update(id, content)
        if (result !== []) {
          resolve(result)
        } else {
          reject(result)
        }
      })
    }
    module.exports = {
      getAll,
      getSingleMessage,
      post,
      deleteMessage,
      updateMessage
    }
