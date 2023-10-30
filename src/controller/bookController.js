const Bookdata=require("../models/bookSchema")

// creating the booklibary with adding details 
const addBooks=async(req,res)=>{
    //console.log(req.body)
    const { title, author, summary } = req.body;
    const newBook= new Bookdata({
        title:title,
        author:author,
        summary:summary
    })
    try{
        await newBook.save()
        res.status(201).json(newBook);

    }
    catch(error){
        res.status(401).json({message:"Eoor while creating new book libary "})

    }
    

}
// geeting all book form database
const allBooks = async (req, res) => {
  try {
    const books = await Bookdata.find();

    if (!books || books.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// geeting book by id 
const bookbyId=async(req,res)=>{
    const id=req.params.id;
    try{
        const book=await Bookdata.findById(id);
       
    if (!book) {
      return res
        .status(404)
        .json({ message: "No book available for this specific ID" });
    }
        res.status(200).json(book);
    }
    catch(error){

        res.status(404).json({message:'no such book'});

        }
}
// updating book by spicific id 
const bookUpdate = async (req, res) => {
  const id = req.params.id;
  const { title, author, summary } = req.body;

  try {
    const updatedBook = await Bookdata.findByIdAndUpdate(
      id,
      { title, author, summary },
      { new: true }
    );

    if (!updatedBook) {
      return res
        .status(404)
        .json({ message: "No book available for this specific ID" });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while updating the book" });
  }
};

//deleting book by specific id  
const bookDelete = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedBook = await Bookdata.findByIdAndRemove(id);

    if (!deletedBook) {
      return res
        .status(404)
        .json({ message: "No book available for this specific ID" });
    }

    res.status(202).json({ message: "Book deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while deleting the book" });
  }
};




module.exports = { addBooks, allBooks, bookbyId, bookUpdate, bookDelete };
