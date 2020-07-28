exports.viewSnippet = (req, res) => {
  console.log(req);
  const result = {
    id: "Some Snippet ID",
    userId: req.query.userId,
    snippetImage: '/assets/snippet-images/snippet sample.png',
    imageField: "name",
    timestamp: Date.now(),
  };
  res.status(200).send(result);
  
};

exports.submitSnippet = (req, res) => {
  res.status(201).send({id: result._id, success: true});
};

exports.skipSnippet = (req, res) => {
  res.status(200).send({success:true});
};

