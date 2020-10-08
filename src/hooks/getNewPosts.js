import firebase from "gatsby-plugin-firebase";

function getNewPosts() {
  //let postQuery = firebase.firestore().collection("posts").get();

  firebase.firestore().collection("posts").get().then((snap) => {
    return [snap.docs, null];
  })
    .catch((err) => {
      return [null, err];
    });
}

export default getNewPosts;
