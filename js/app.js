const viewerContainer = document.getElementById('spline-viewer');
const viewer = new SplineViewer({
  url: 'https://prod.spline.design/hA99ZksrOMycNxxZ/scene.splinecode',
  backgroundColor: 0xffffff,
  cameraPosition: { x: 0, y: 0, z: 100 },
  cameraTarget: { x: 0, y: 0, z: 0 },
});
viewer.appendTo(viewerContainer);