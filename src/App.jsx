import React from 'react'
import CatalogueLine from './components/CatalogueLine'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
const doublebed = [
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (1).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (2).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (3).jpeg" },
  // { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (4).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (5).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (6).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (7).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (8).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (9).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (10).jpeg" },

  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (11).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (12).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (13).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (14).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (15).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (16).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (17).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (18).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (19).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (20).jpeg" },

  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (21).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (22).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (23).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (24).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (25).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (26).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (27).jpeg" },
  // { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (28).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (29).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (30).jpeg" },

  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (31).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (32).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (33).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (34).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (35).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (36).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (37).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (38).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (39).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (40).jpeg" },

  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (41).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (42).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (43).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (44).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (45).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (46).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (47).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (48).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (49).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (50).jpeg" },

  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (51).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (52).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (53).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (54).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (55).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (56).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (57).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (58).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (59).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (60).jpeg" },

  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (61).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (62).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (63).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (64).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (65).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (66).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (67).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (68).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (69).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (70).jpeg" },

  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (71).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (72).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (73).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (74).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (75).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (76).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (77).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (78).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (79).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (80).jpeg" },

  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (81).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (82).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (83).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (84).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (85).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (86).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (87).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (88).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (89).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (90).jpeg" },

  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (91).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (92).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (93).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (94).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (95).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (96).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (97).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (98).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (99).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (100).jpeg" },

  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (101).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (102).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (103).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (104).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (105).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (106).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (107).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (108).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (109).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (110).jpeg" },

  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (111).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (112).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (113).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (114).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (115).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (116).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (117).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (118).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (119).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (120).jpeg" },

  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (121).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (122).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (123).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (124).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (125).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (126).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (127).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (128).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (129).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (130).jpeg" },

  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (131).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (132).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (133).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (134).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (135).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (136).jpeg" },
  { title:"Jaipuri Bedsheet", size:"Double", url:"/ALL_IMAGES/images (137).jpeg" },
];


  // const singlebed = [
  //   {
  //     title:"Jaipuriya",
  //     url:"photo (1).jpeg"
  //   },
  //   {
  //     title:"Sanganer",
  //     url:"photo (2).jpeg"
  //   },
  //   {
  //     title:"Ajmer",
  //     url:"photo (3).jpeg"
  //   },
  //   {
  //     title:"Delhi",
  //     url:"photo (4).jpeg"
  //   },
  //   {
  //     title:"Jaipuriya",
  //     url:"photo (5).jpeg"
  //   },
  //   {
  //     title:"Sanganer",
  //     url:"photo (6).jpeg"
  //   },
  //   {
  //     title:"Ajmer",
  //     url:"photo (7).jpeg"
  //   },
  //   {
  //     title:"Delhi",
  //     url:"photo (8).jpeg"
  //   }

  // ]
  return (
    <div className='App'>
      <Header />

      <CatalogueLine cardtitle ={doublebed} />
      {/* <h1 className='type'>Single Bed</h1>
      <CatalogueLine cardtitle ={singlebed} /> */}
      <Footer />
    </div>
  )
}

export default App
