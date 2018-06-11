module.exports = function(req, res, next){
  const capacity = {cpu: "20", memory: "100Gi", pods: "20"};
  console.log(capacity)
  res.json(capacity);
}