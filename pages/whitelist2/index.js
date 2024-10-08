import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient'; // Ensure your Supabase client is set up

export default function Home() {
  const [username, setUsername] = useState('');
  const [wallet, setWallet] = useState('');
  const [followed, setFollowed] = useState(''); // To track the selected radio button
  const [message, setMessage] = useState(''); // To store the message
  const [messageType, setMessageType] = useState(''); // To differentiate between success and error
  const [isClosed, setIsClosed] = useState(true); // New state to control button display

  const handleSubmit = async () => {
    if (isClosed) return;

    setMessage(''); // Clear previous messages

    if (!username || !wallet) {
      setMessageType('error');
      setMessage('Please fill in both fields.');
      return;
    }

    if (wallet.length !== 62 || !wallet.startsWith('bc1p')) {
      setMessageType('error');
      setMessage('Check your wallet address.');
      return;
    }

    if (followed !== 'yes') {
      setMessageType('error');
      setMessage('You must follow our Twitter first before submitting.');
      return;
    }

    // Skip checking if the wallet address is already submitted
    // Insert the new record directly
    const { insertError } = await supabase
      .from('ordinals_data') // Replace with your table name
      .insert([{ username, wallet }]);

    if (insertError) {
      console.error('Error inserting data:', insertError);
      setMessageType('error');
      setMessage('There was an error submitting your data. Please try again.');
      return;
    }

    setMessageType('success');
    setMessage('Form submitted successfully!');
    setUsername('');
    setWallet('');
    setFollowed(''); // Reset the radio button selection
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/ladybg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {message && (
        <div
          className={`fixed top-4 right-4 p-4 rounded shadow-lg text-white ${
            messageType === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {message}
        </div>
      )}

      <div className="bg-white bg-opacity-70 p-8 rounded shadow-md max-w-md w-full">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="textbox1">
            What is your X username?*
          </label>
          <input 
            id="textbox1" 
            type="text" 
            placeholder="@ladybtc_" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="textbox2">
            What is your Taproot wallet address?*
          </label>
          <input 
            id="textbox2" 
            type="text" 
            placeholder="bc1p..." 
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>

        <div className="mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Have you followed <a href="https://x.com/ladybtc_" target="_blank" rel="noopener noreferrer" className="text-blue-500">@ladybtc_</a>?* (<a href="https://x.com/ladybtc_/status/1827389361018560628" target="_blank" rel="noopener noreferrer" className="text-blue-500">LIKE+RT " THIS TWEET</a>)
          </span>
          <label className="inline-flex items-center mr-4">
            <input 
              type="radio" 
              className="form-radio" 
              name="follow" 
              value="yes" 
              onChange={() => setFollowed('yes')}
              checked={followed === 'yes'} // Maintain the checked state based on the selected option
            />
            <span className="ml-2 text-black">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              className="form-radio" 
              name="follow" 
              value="no" 
              onChange={() => setFollowed('no')}
              checked={followed === 'no'} // Maintain the checked state based on the selected option
            />
            <span className="ml-2 text-black">No</span>
          </label>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button 
            onClick={handleSubmit}
            disabled={isClosed} // Disable the button if isClosed is true
            className={`${
              isClosed ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#f2a900] hover:bg-[#f2a900]'
            } text-white font-bold py-2 px-4 rounded`}
          >
            {isClosed ? 'Closed' : 'Send'}
          </button>
        </div>
        <div className="flex items-center justify-center mt-6">
          <a href="https://x.com/ladybtc_" target="_blank" rel="noopener noreferrer" className="flex items-center text-xl text-black">
            Follow us on
            <img src="/xlogo.png" alt="X logo" className="h-8 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
