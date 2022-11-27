// current date
var timeDisplay = $('#currentDay');
var Day = moment();
// Moment Object - shows date all the way to the seconds
  timeDisplay.text(Day.format('dddd MMMM Do YYYY, h:mm:ss a'));

$('textarea').blur()

var taskNotification = function() {
  var currentTime = moment().format('H')

  $('textarea').each(function() {
      var hour = parseInt($(this).attr('data-hour'))
      console.log(hour)
      if (hour == currentTime) {
          $(this).addClass('present')
      } else if (hour > currentTime) {
          $(this).addClass('future')
      } else {
          $(this).addClass('past')
      }
  })

}
taskNotification();

setInterval(taskNotification,15000);

// Save in local storage Function
$(document).ready(function() {
  $('.saveBtn').on('click', function() {
      var taskToDo = $(this).siblings('.description').val();
      var hourSave = $(this).parent().attr('id');

      localStorage.setItem(hourSave, taskToDo);
  })

  $('#hour09 .description').val(localStorage.getItem('H9'));
  $('#hour10 .description').val(localStorage.getItem('H10'));
  $('#hour11 .description').val(localStorage.getItem('H11'));
  $('#hour12 .description').val(localStorage.getItem('H12'));
  $('#hour13 .description').val(localStorage.getItem('H13'));
  $('#hour14 .description').val(localStorage.getItem('H14'));
  $('#hour15 .description').val(localStorage.getItem('H15'));
  $('#hour16 .description').val(localStorage.getItem('H16'));
  $('#hour17 .description').val(localStorage.getItem('H17'));

})

