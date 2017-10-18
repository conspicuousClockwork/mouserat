
function MouseRat( ratCallback ) {
    //create event listener and attach callback for dummy position
    document.onmousemove = e => this.onMove( e, ratCallback );
    this.mouse = { x: 0, y: 0 };

    //initialize dummy position
    this.rat = this.mouse;

    //event listener function
    this.onMove = (e, callback) => {
        
        //callback passed to MouseRat instance should return coordinates {x: newRatX, y: newRatY} based on the event object (new coordinates) and this.mouse (old coordinates)
        this.rat = callback( e, this.mouse, this.rat );

        //update coordinates to client position
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
        
    }
}
