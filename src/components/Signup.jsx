const Signup = () => {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
              required 
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            Signup
          </button>
        </form>
      </div>
    );
  };
  
  export default Signup;
  