//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new instance of the Main class.
 *
 * @constructor
 * 
 * @class
 * @classdesc
 * 
 * Entry point class.
 */
Gunslinger.system.Main = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Extend (Rune) Application.
     */
    rune.system.Application.call(this, {
        developer: "net.warelius",
        app: "Gunslinger",
        build: "0.0.1",
        scene: Gunslinger.scene.Menu,
        resources: Gunslinger.data.Requests,
        useGamepads:true,
        useKeyboard:true,
        framerate: 30,
        debug: true
    });
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

Gunslinger.system.Main.prototype = Object.create(rune.system.Application.prototype);
Gunslinger.system.Main.prototype.constructor = Gunslinger.system.Main;