const PrivacyPage = ({ title, pdfSrc }) => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      <iframe
        key={pdfSrc}
        src={pdfSrc}
        title={title}
        className="h-screen w-screen border-0"
      />
    </div>
  );
};

export default PrivacyPage;
