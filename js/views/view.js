// class View{
//     _data;

//     renderData = function(data){

//         if(!data || data.length === 0)
//         {
//             alert ('Cannot get data');
//         }
//         this._data = data;
//     const markup = this._generateMarkup();
    
//     this._parentElement.insertAdjacentHTML('beforeend', markup);
//     }
    
    
//     clear()
//     {
//         this._parentElement.innerHTML = '';
//     }
// }

 
// export default View;


export const renderData = function(parentElement, markup)
{
    parentElement.insertAdjacentHTML('beforeend', markup);
}


