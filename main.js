function handleSearch(){
    const searchBar = document.getElementById("searchBar");
    const searchQuery = searchBar.value;
    window.close();
    window.open(`https://www.google.com/search?udm=14&q=${searchQuery}&safe=active&ssui=on`);
}

function FocusSearchBar(){
    document.getElementById("searchBar").focus();
}