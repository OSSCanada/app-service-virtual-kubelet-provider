module.exports = function(req, res, next){
  const currentTime = new Date();
  const nodeConditions = [
    {
      "type": "Ready",
      "status": "True",
      "reason": "KubeletReady",
      "message": "Nodey Times",
      "lastTransitionTime": currentTime.toISOString(),
      "lastHeartbeatTime": currentTime.toISOString()
    }
  ];

  console.log('Getting node_condition');
  console.log(nodeConditions);

  res.json(nodeConditions);
}