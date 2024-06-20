$(document).ready(function() {
    // Add Destination
    $('#add-destination-form').on('submit', function(event) {
      // Prevent default form submission
      event.preventDefault();
      // Get Destination and description values
      const name = document.querySelector('#destination-name').value;
      const description = document.querySelector('#description').value;
  
      // Create new table row HTML https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td
      const newRow = `
        <tr>
          <td>${name}</td>
          <td>${description}</td>
          <td><button class="btn btn-danger delete-button">Delete</button></td>
        </tr>
      `;
      // Append new row to the table body
      document.querySelector('#destination-table tbody').insertAdjacentHTML('beforeend', newRow);
      // Clear destination name and description input field
      document.querySelector('#destination-name').value = '';
      document.querySelector('#description').value = '';
    });
  
    // Delete Destination
    // Delete button click event handler using event delegation https://developer.mozilla.org/en-US/
    $(document).on('click', '.delete-button', function() {
      // Remove the closest table row
      $(this).closest('tr').remove();
    });
    // Dark Mode Toggle
    document.querySelector('#dark-mode-toggle').addEventListener('click', function() {
      document.querySelector('body').classList.toggle('dark-mode');
    });
  });