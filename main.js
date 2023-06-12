var client = contentful.createClient({
    space: 'z185uaf2ygi2',
    accessToken: 'RsxeIFeWNyo7uZg7PTYJa_3p2ER70FbuiqDV8cmN28w',
  });

  client.getEntries({content_type: 'contentfulA2'}).then(function (entries) {
    // log the title for all the entries that have it
    console.log(entries);
    // loop through each entry, call it 'entry'
    console.log(entries);
    entries.items.forEach(function (entry) {
      var item = document.createElement("div");
      item.classList.add("item");

      var getDetails = document.createElement("a");
      getDetails.href = "details.html?id=" + entry.sys.id;
      // getDetails.innerHTML = "get details";

      item.append(getDetails);

      var title = document.createElement("h2");
      title.innerHTML = entry.fields.title;
      getDetails.append(title);

      var description = document.createElement("p");
      description.innerHTML = entry.fields.description;
      item.append(description);

      if (entry.fields.coverImg){
        var coverImage = document.createElement("img");
        coverImage.src = entry.fields.coverImg.fields.file.url;
        coverImage.classList.add("cover-image");
        item.append(coverImage);
      }

      var link = document.createElement("a");
      link.href = entry.fields.linkDestination;
      link.innerHTML = "link to " + entry.fields.title;
      item.append(link); 


      document.getElementById("place-for-content").append(item);
      // structure will always be entry.fields.nameoffield
        console.log("title: " + entry.fields.title);
        console.log("Descr: " + entry.fields.description);

    entries.items.forEach(function(entry) {
        if (entry.fields.productName){
            console.log(entry.fields.productName);
        }
    });
  });
});
