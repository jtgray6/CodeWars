// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  
  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
  }
  
  // returns the number of pages
  PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length/this.itemsPerPage);
  }
  
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    //determine if more than one page
    //if only one page, return collection.length
    //if more, see if its the last page: pageIndex = this.pageCount-1
    //if last page, return this.collection.length % this.itemsPerPage
    //else, return itemsPerPage
    if (this.pageCount <= 1){
      return this.collection.length;
    } else {
      if (pageIndex === this.pageCount()-1){
        return this.collection.length % this.itemsPerPage;
      } else {
        return this.itemsPerPage;
      };
    };  
  };
  
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if (itemIndex > this.collection.length || itemIndex < 0){
      return -1;
    };
    return Math.floor(itemIndex/this.itemsPerPage);
  }
  
  var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
  // helper.pageCount(); //should == 2
  // // helper.itemCount(); //should == 6
  helper.pageItemCount(1); //should == 2
  // helper.pageItemCount(1); // last page - should == 2
  // helper.pageItemCount(2); // should == -1 since the page is invalid
  
  // pageIndex takes an item index and returns the page that it belongs on
  // helper.pageIndex(5); //should == 1 (zero based index)
  // helper.pageIndex(2); //should == 0
  // helper.pageIndex(20); //should == -1
  // helper.pageIndex(-10); //should == -1
  
  