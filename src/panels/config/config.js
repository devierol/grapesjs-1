//var btnView = require('./btnView.html');

var crc = 'create-comp';
var mvc = 'move-comp';
var swv = 'sw-visibility';
var expt = 'export-template';
var osm = 'open-sm';
var otm = 'open-tm';
var ola = 'open-layers';
var obl = 'open-blocks';
var ful = 'fullscreen';
var prv = 'preview';
var save = 'save';


//var btnDropdown  = btnView;


module.exports = {
  stylePrefix: 'pn-',

  // Default panels fa-sliders for features
  defaults: [

/*    {
    id:'viewing'
    buttons: [
  
    ],
    },
*/

    {  
    id: 'commands',
    buttons: [

    {
      id: osm,
      className: 'gjs-pn-panel',
      command: osm,
      active: true,
      attributes  : { title: '' },
    },  

    {
      id: '',
      className: 'fa fa-cog',
      command: '',
      //context: '',
      attributes: { title: 'Setting' },
    },
  
    {
      id: '',
      className: 'pop_up',
      command: '',
      attributes  : { title: 'pop_up' },
    }  

    ],
    },

/*
    {
    id: 'options',
    buttons: [


    {
      active: true,
      id: swv,
      className: 'fa fa-square-o',
      command: swv,
      context: swv,
      attributes: { title: 'View components' },
    },{
      id: ful,
      className: 'fa fa-arrows-alt',
      command: ful,
      context: ful,
      attributes: { title: 'Fullscreen' },
    },{
      id: expt,
      className: 'fa fa-code',
      command: expt,
      attributes: { title: 'View code' },
    },
  
    ],
    },
*/

    {
    id: 'views',
    buttons  : [
 
     /*
    {
      id: osm,
      className: 'fa fa-paint-brush',
      command: osm,
      active: true,
      attributes: { title: 'Open Style Manager' },
    },

    {
      id: otm,
      className: 'fa fa-cog',
      command: otm,
      attributes: { title: 'Settings' },
    },

    {
      id: ola,
      className: 'fa fa-bars',
      command: ola,
      attributes  : { title: 'Open Layer Manager' },
    },
    */

      {
      id: '',
      className: 'section',
      command: '',
      attributes  : { title: 'section' },
      },

      {
      id: ola,
      className: 'row',
      command: ola,
      attributes  : { title: 'row' },
      },
   
      {
      id: otm,
      className: 'column',
      command: otm,
      attributes  : { title: 'column' },
      },

      { 
      id: obl,
      className: 'elements',
      command: obl,
      attributes: { title: 'elements' },
      },

      {
      id: prv,
      className: 'fa fa-eye',
      command: prv,
      context: prv,
      attributes: { title: 'Preview' },
      },

      {
      id: "",
      className: 'save',
      command: "",
      attributes  : { title: 'save' },
      }

    ],
    }

  ],

  // Editor model
  em : null,

  // Delay before show children buttons (in milliseconds)
  delayBtnsShow  : 300,
};

  //if(document.getElementById(obl).clicked) {
  

