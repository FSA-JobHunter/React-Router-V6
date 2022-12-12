import React from "react"
import { Routes, Route } from "react-router-dom"
import  Home  from './components/Home'
import  BookList  from './components/BookList'
import  Book  from './components/Book'
import  NewBook  from './components/NewBook'
import  NotFound  from './components/NotFound'
import { BookLayout } from "./components/BookLayout"
import { NavLayout } from "./components/NavLayout"
import AboutUs from "./components/AboutUs"
import './style.css'

// //*basic routes
// const App = ()=> {
//   return (
//     <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/books" element={<BookList />}/>
//         <Route path='/books/:id' element={<Book />}/>
//         <Route path='/books/newbook' element={<NewBook />}/>
//         <Route path='*' element={<NotFound />} />
//     </Routes>
//   )
// }

// //*nested routes
// const App = ()=> {
//   return (
//     <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/books">
//             <Route index element={<BookList />} />
//             <Route path=":id" element={<Book />} />
//             <Route path="newbook" element={<NewBook />} />
//         </Route>
//         <Route path='*' element={<NotFound />} />
//     </Routes>
//   )
// }

// //*Shared Layouts
// const App = ()=> {
//     return (
//       <Routes>
//           <Route path="/" element={<Home />}/>
//           <Route path="/books" element={<BookLayout />}>
//               <Route index element={<BookList />} />
//               <Route path=":id" element={<Book />} />
//               <Route path="newbook" element={<NewBook />} />
//           </Route>
//           <Route path='*' element={<NotFound />} />
//       </Routes>
//     )
//   }

//*double nested routes
const App = ()=> {
    return (
      <Routes>
          <Route element={<NavLayout />}>
            <Route path="/" element={<Home />}/>
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/books" element={<BookLayout />}>
                <Route index element={<BookList />} />
                <Route path=":id" element={<Book />} />
                <Route path="new" element={<NewBook />} />
          </Route>
          <Route path='*' element={<NotFound />} />
          </Route>
      </Routes>
    )
  }

// //*multiple Routes
// const App = ()=> {
//   return (
//     <>
//     <Routes>
//         <Route element={<NavLayout />}>
//           <Route path="/" element={<Home />}/>
//           <Route path="/aboutus" element={<AboutUs />}/>
//           <Route path="/books" element={<BookLayout />}>
//               <Route index element={<BookList />} />
//               <Route path=":id" element={<Book />} />
//               <Route path="new" element={<NewBook />} />
//         </Route>
//         <Route path='*' element={<NotFound />} />
//         </Route>
//     </Routes>
    
//     <aside>
//       <Routes>
//           <Route path="/books" element={<h1>Extra Content</h1>}></Route>
//       </Routes>
//     </aside>
//     </>
//   )
// }

export default App