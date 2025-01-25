const LoanRequestPage = () => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Loan Request</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Category</label>
            <select className="w-full border-gray-300 rounded p-2">
              <option>Wedding Loans</option>
              <option>Home Construction Loans</option>
              <option>Business Startup Loans</option>
              <option>Education Loans</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Amount</label>
            <input type="number" className="w-full border-gray-300 rounded p-2" />
          </div>
          <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2">
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default LoanRequestPage;
  