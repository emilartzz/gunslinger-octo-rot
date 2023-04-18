//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/** 
 * Creates a new Requests object.
 * 
 * @constructor
 * @extends rune.resource.Requests
 * 
 * @class
 * @classdesc
 * 
 * This class includes (bakes) resource files used by the application. A 
 * resource file is made available by reference (URI) or base64-encoded string. 
 * Tip: Use Rune-tools to easily bake resource files into this class.
 */
Gunslinger.data.Requests = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Extend rune.resource.Requests
     */
    rune.resource.Requests.call(this);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

Gunslinger.data.Requests.prototype = Object.create(rune.resource.Requests.prototype);
Gunslinger.data.Requests.prototype.constructor = Gunslinger.data.Requests;

//------------------------------------------------------------------------------
// Override protected prototype methods
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
Gunslinger.data.Requests.prototype.m_construct = function() {
    rune.resource.Requests.prototype.m_construct.call(this);
    this.add("test", "./../asset/json/arenas/test.json");
	this.add("characters", "./../asset/props/characters.json");
	this.add("weapons", "./../asset/props/weapons.json");
	this.add("body_tux", "./../asset/sprites/characters/player/bodies/body_tux.png");
	this.add("head_mohawk", "./../asset/sprites/characters/player/heads/head_mohawk.png");
	this.add("legs_cowboy", "./../asset/sprites/characters/player/legs/legs_cowboy.png");
	this.add("test_bg_white", "./../asset/test_bg_white.png");
	this.add("tilemap_graphics", "./../asset/tileset/arenas/tilemap_graphics.png");
};