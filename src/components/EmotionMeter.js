function emoticon(){
  let emoticon = "HAPPY"
  return(<div> {emoticon === "HAPPY" ? <i className="far fa-smile-beam fa-10x"></i> : <i className="far fa-smile-beam fa-10x"></i>}</div>)
}

export default emoticon;

