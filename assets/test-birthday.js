(function(){
  const url = new URL(window.location.href);
  const params = url.searchParams;
  if( params.get('addTags') != null ){
    const createCustomerForm = document.getElementById("create_customer");
    const addTagsInput = `<input type="hidden" name="customer[tags]" value="${params.get('addTags')}">`;
    createCustomerForm.insertAdjacentHTML('beforeend',addTagsInput);
  }
})();