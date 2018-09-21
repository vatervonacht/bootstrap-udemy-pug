import './scss/index.scss';
import 'bootstrap';
import 'popper.js';
import 'jquery';


import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

$(() => {
  ClassicEditor.create(document.querySelector('#editor1'))
               .then(editor => { 
                   console.log(editor);
                })
               .catch( error => { 
                   console.log(error);
                });
});