import './loading.css';

function Loading() {
  return (
    <>
      <div className="fullscreen-loading">
        <p className="loading">
          loading<span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </p>
      </div>
      <div className="fullscreen-msg">
        <div className="message-box">
          <p className="loading-msg">
            This is an education purpose-only site hosted using free services.
            Please wait until it loads :). Please allow location permission.
          </p>
        </div>
      </div>
    </>
  );
}

export default Loading;
