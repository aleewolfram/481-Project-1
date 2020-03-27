// cs-sketch.js; P5 key animation fcns.  // CF p5js.org/reference
// Time-stamp: <2020-02-17 19:15:08 Chuck Siska>

// ============================================================ Mods ====
// to 2020-02-10 16:42:24: add btns.
// to 2020-02-09 16:55:21: add btn onclick exported fn
// to 2020-02-10 17:22:23: log btn onclick

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas; // JS Global var, w canvas size info.
var g_frame_cnt; // Setup a P5 display-frame counter, to do anim
var g_frame_mod; // Update ever 'mod' frames.
var g_stop; // Stop by default.
var g_cnv;   // To hold a P5 canvas.

var g_l4job = { id:1 }; // Put Lisp stuff for JS-to-access in ob; id to make ob.


function setup() // P5 Setup Fcn
{
    console.log( "Beg P5 setup =====");
    console.log( "@: log says hello from P5 setup()." );
    g_canvas = { cell_size:10, wid:42, hgt:32 };
    g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
    g_frame_mod = 24; // Update ever 'mod' frames.
    g_stop = 1; // Stop by default.

    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1.
    let height = sz * g_canvas.hgt;
    g_cnv = createCanvas( width, height );  // Make a P5 canvas.
    console.log( "@: createCanvas()." );
    draw_grid( 10, 50, 'green', 'white' );
    console.log( "End P5 setup =====");
}

var g_bot = { cnt:0, x:20, y:20, color:100 }; // Dir is 0..7 clock, w 0 up.
var g_box = { t:1, hgt:30, l:1, wid:40 }; // Box in which bot can move.

function csjs_get_pixel_color_sum( rx, ry )
{
    let acolors = get( rx, ry ); // Get pixel color [RGBA] array.
    let sum = acolors[ 0 ] + acolors[ 1 ] + acolors[ 2 ]; // Sum RGB.
    //dbg console.log( "color_sum = " + sum );
    return sum;
}

function draw_update()  // Update our display.
{
    console.log( "Call g_l4job.draw_fn" );
    g_l4job.draw_fn();
    ++g_bot.cnt;
}

function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    ++g_frame_cnt;
    if (0 == g_frame_cnt % g_frame_mod)
    {
        console.log( "g_frame_cnt = " + g_frame_cnt );
        if (!g_stop) draw_update();
    }
}
