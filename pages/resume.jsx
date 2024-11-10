function ResumeViewer() {
  return (
    <iframe
      src="/resume.pdf"
      style={{ width: '100%', height: '750px', border: 'none' }}
      title="PDF Viewer"
    />
  );
}

export default ResumeViewer;
