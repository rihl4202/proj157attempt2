AFRAME.registerComponent("comics",{
    init:function(){
      this.comicContainer = this.el
      this.createCards()
    },
  
    createCards:function(){
      const thumbnailsRef = [
        {
          id:"batman", 
          title:"Batman Superman",
          url:"./assets/posters/batman.jpg"
        },
  
        {
          id:"greenlantern", 
          title:"Green Lantern",
          url:"./assets/posters/greenlantern.jpg"
        },
  
        {
          id:"jughead", 
          title:"Jughead",
          url:"./assets/posters/jughead.jpg"
        },
  
        {
          id:"wonderwoman", 
          title:"Wonder Woman",
          url:"./assets/posters/wonderwoman.jpg"
        }
      ]
  
      let previousXPosition = -60 
  
      for(var item of thumbnailsRef){
        const posX = previousXPosition + 25
        const posY = 10
        const posZ = -40
        const position = {x:posX, y:posY, z:posZ}
        previousXPosition = posX
  
        const borderEl = this.createBorder(position, item.id)
        const thumbnailEl = this.createThumbnail(item)
        borderEl.appendChild(thumbnailEl)
        
        const titleEl = this.createTitleEl(position, item)
        borderEl.appendChild(titleEl)
        
        this.placesContainer.appendChild(borderEl)
        
      }
  
    },
  
    createTitleEl:function(position,item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("text", {
        font:"exo2bold", align:"center", width:70, color:"red", value:item.title
      })
      const elPosition = position
      elPosition.y = -20 
      entityEl.setAttribute("position", elPosition)
      entityEl.setAttribute("visible", true)
      return entityEl
    },
  
    createBorder:function(position,id){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("id", id)
      entityEl.setAttribute("geometry", {
        primitive:"rectangle", height:10, width:6
      })
      entityEl.setAttribute("material", {
        color:"red"
      })
      entityEl.setAttribute("position", position)
      return entityEl
    },
  
    createThumbnail:function(item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry", {
        primitive:"plane", height:20, width:28
      })
      entityEl.setAttribute("position", {x:0, y:5, x:0.1})
      entityEl.setAttribute("material", {
        src:item.url
      })
      return entityEl 
    }
  })