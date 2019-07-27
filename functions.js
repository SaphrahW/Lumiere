<script type="text/javascript">
function submitform()
{
  document.myform.submit();
}
<script>

var form = document.getElementById('theForm');

form.style.display = 'none';

var processing = document.createElement('span');

processing.appendChild(document.createTextNode('processing ...'));

form.parentNode.insertBefore(processing, form);

