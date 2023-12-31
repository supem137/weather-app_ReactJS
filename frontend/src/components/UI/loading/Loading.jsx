import './loading.css';

function Loading() {
  return (
    <>
      <div className="fullscreen-loading">
        <p className="loading">loading...</p>
      </div>
      <div className="fullscreen-msg">
        <p className="loading-msg">
          This is an education purpose-only site hosted using free services.
          Please wait until it loads :). and please allow location permission.
        </p>
      </div>
    </>
  );
}

export default Loading;
