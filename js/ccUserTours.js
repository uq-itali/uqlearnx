
 // Initialize Shepherd
 var imgBuilderTour = new Shepherd.Tour({
    defaultStepOptions: {
      scrollTo: true,
      showCancelLink: true,
      modalOverlayOpeningPadding: 10, // Optional: Set padding around the highlighted element
      modalOverlayClosingPadding: 10 
    },
    useModalOverlay: true,
  });
  
  // Define the steps for the imgBuilderTour
  imgBuilderTour.addStep({
    id: 'imgStep1',
    text: 'Welcome to the image builder. Click next to take a tour, or done to hide this tour.',
    // Add other properties for this tour step
    buttons: [
      {
        text: 'Next',
        action: imgBuilderTour.next,
        classes: 'btn btn-success'
      },
      {
        text: 'Done',
        action: imgBuilderTour.cancel,
        classes: 'btn btn-danger'
      }
    ],
    modal: true
  });
  
  imgBuilderTour.addStep({
    id: 'imgStep2',
    text: 'Choose your image position: Left/Right/Float, or choose to have image only or 2 images side by side',
    attachTo: { element: '#imgStep1', on: 'right' },
    // Add other properties for this tour step
    buttons: [
    {
        text: 'Back',
        action: imgBuilderTour.back,
        classes: 'btn btn-secondary'
      },  
    {
        text: 'Next',
        action: imgBuilderTour.next,
        classes: 'btn btn-success'
      },
      {
        text: 'Done',
        action: imgBuilderTour.cancel,
        classes: 'btn btn-danger'
      }
    ],
    modal: true
  });
  imgBuilderTour.addStep({
    id: 'imgStep3',
    text: 'Paste your image link. We suggest the Web link from the Extend Files & Content area, not the studio link.',
    attachTo: { element: '#imgStep2', on: 'right' },
    // Add other properties for this tour step
    buttons: [
    {
        text: 'Back',
        action: imgBuilderTour.back,
        classes: 'btn btn-secondary'
      },  
    {
        text: 'Next',
        action: imgBuilderTour.next,
        classes: 'btn btn-success'
      },
      {
        text: 'Done',
        action: imgBuilderTour.cancel,
        classes: 'btn btn-danger'
      }
    ],
    modal: true
  });
  // Initialize Shepherd for the btnBuilderTour
  var btnBuilderTour = new Shepherd.Tour({
    defaultStepOptions: {
      scrollTo: true,
      showCancelLink: true
    }
  });
  
  // Define the steps for the btnBuilderTour
  btnBuilderTour.addStep({
    id: 'btnStep1',
    text: 'Button Builder Tour - Step 1',
    // Add other properties for this tour step
    buttons: [
      {
        text: 'Next',
        action: btnBuilderTour.next
      }
    ]
  });
  
  // Attach event listeners to the buttons that trigger the tours
  document.getElementById('imgBuilderBtn').addEventListener('click', function() {
    imgBuilderTour.start();
  });
  
  document.getElementById('btnBuilderBtn').addEventListener('click', function() {
    btnBuilderTour.start();
  });
  