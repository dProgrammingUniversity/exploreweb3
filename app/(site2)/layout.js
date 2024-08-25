// /app/(site2)/blinks-canvas/layout.js

export default function BlinksCanvasLayout({ children }) {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}

