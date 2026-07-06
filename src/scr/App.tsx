import React, { useState } from 'react';
import { Car, Calendar, Shield, CreditCard, ChevronRight, CheckCircle, Camera, Smartphone, MapPin, AlertCircle } from 'lucide-react';

// Complete Vehicle Fleet Data
const CAR_FLEET = [
  { id: 1, name: 'Tesla Model 3', type: 'Electric', price: 85, image: '⚡', range: '350 mi range', feature: 'EV-Optimized Routing' },
  { id: 2, name: 'Toyota RAV4 Hybrid', type: 'Hybrid', price: 60, image: '🔋', range: '580 mi total', feature: 'Eco Mode Smart-Switch' },
  { id: 3, name: 'VW Golf GTI', type: 'Gas', price: 55, image: '⛽', range: '34 mpg avg', feature: 'Guaranteed Model Tag Match' },
];

export default function App() {
  const [selectedCar, setSelectedCar] = useState(CAR_FLEET[0]);
  const [days, setDays] = useState(3);
  const [insurance, setInsurance] = useState(false);
  const [activeTab, setActiveTab] = useState('browse'); // browse, damage-scan, key-activation
  const [scanStep, setScanStep] = useState('upload'); // upload, analyzing, complete
  const [scannedFeatures, setScannedFeatures] = useState<string[]>([]);

  // Dynamic Pricing Logic
  const basePrice = selectedCar.price * days;
  const insurancePrice = insurance ? 25 * days : 0;
  const totalAmount = basePrice + insurancePrice;

  // Fake AI Scanning Simulation
  const handleAiScan = () => {
    setScanStep('analyzing');
    setTimeout(() => {
      setScanStep('complete');
      setScannedFeatures(['Pre-existing scratch found on front bumper (Logged)', 'Tire pressure verified optimal', 'Fuel/Battery matched at 94%']);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <Car className="w-6 h-6" />
            <span>DriveNow Hub</span>
          </div>
          <nav className="flex gap-4 text-sm font-medium">
            <button onClick={() => setActiveTab('browse')} className={`px-3 py-2 rounded-lg ${activeTab === 'browse' ? 'bg-blue-50 text-blue-600' : 'text-slate-600'}`}>1. Fleet & Booking</button>
            <button onClick={() => setActiveTab('damage-scan')} className={`px-3 py-2 rounded-lg ${activeTab === 'damage-scan' ? 'bg-blue-50 text-blue-600' : 'text-slate-600'}`}>2. AI Damage Scan</button>
            <button onClick={() => setActiveTab('key-activation')} className={`px-3 py-2 rounded-lg ${activeTab === 'key-activation' ? 'bg-blue-50 text-blue-600' : 'text-slate-600'}`}>3. Contactless Key</button>
          </nav>
        </div>
      </header>

      {/* Main Grid View */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {activeTab === 'browse' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side: Fleet List & Features */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Advanced Search & Filtering</h2>
                <p className="text-slate-500 text-sm mt-1">Select 2-hour buffer pre-cleaned premium options[span_1](start_span)[span_1](end_span).</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CAR_FLEET.map((car) => (
                  <div 
                    key={car.id} 
                    onClick={() => setSelectedCar(car)}
                    className={`p-5 rounded-xl border-2 transition-all cursor-pointer bg-white ${selectedCar.id === car.id ? 'border-blue-600 shadow-sm' : 'border-slate-200'}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">{car.type}</span>
                        <h3 className="font-bold text-lg mt-1">{car.name}</h3>
                        <p className="text-xs text-slate-400 mt-0.5">{car.range} • {car.feature}</p>
                      </div>
                      <span className="text-3xl">{car.image}</span>
                    </div>
                    <div className="mt-6 flex justify-between items-end">
                      <span className="text-xs text-slate-400">Guaranteed Model Tagged</span>
                      <span className="font-bold text-lg">${car.price}<span className="text-xs font-normal text-slate-500">/day</span></span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Smart Next-Gen Features Showcase */}
              <div className="bg-white border border-slate-200 p-5 rounded-xl space-y-3">
                <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400">Smart & Next-Gen Systems Activated</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
                  <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg"><Smartphone className="w-4 h-4 text-blue-500" /> Contactless Key Ready</div>
                  <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg"><MapPin className="w-4 h-4 text-blue-500" /> EV-Specific Live Mapping</div>
                  <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg"><Camera className="w-4 h-4 text-blue-500" /> AI Fraud Dashboard Link</div>
                </div>
              </div>
            </div>

            {/* Right Side: Transparent Checkout Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6 sticky top-24">
                <h3 className="font-bold text-lg flex items-center gap-2 border-b border-slate-100 pb-3">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span>Transparent Summary</span>
                </h3>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500">Rental Duration</label>
                  <input type="range" min="1" max="14" value={days} onChange={(e) => setDays(Number(e.target.value))} className="w-full accent-blue-600" />
                  <div className="text-sm font-medium">{days} Days Selected</div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <div>
                      <p className="text-xs font-semibold">Full Protection Slider</p>
                      <p className="text-[10px] text-slate-400">No liability deductible</p>
                    </div>
                  </div>
                  <input type="checkbox" checked={insurance} onChange={(e) => setInsurance(e.target.checked)} className="w-4 h-4 rounded text-blue-600" />
                </div>

                <div className="space-y-2 text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <div className="flex justify-between"><span>Base ({selectedCar.name})</span><span>${basePrice}</span></div>
                  {insurance && <div className="flex justify-between"><span>Insurance Cover</span><span>${insurancePrice}</span></div>}
                  <div className="flex justify-between font-bold text-base text-slate-900 border-t pt-2"><span>Total Amount</span><span>${totalAmount}</span></div>
                </div>

                <button onClick={() => setActiveTab('damage-scan')} className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg text-sm flex items-center justify-center gap-1 hover:bg-blue-700 transition-colors">
                  <span>Confirm & Move to Damage Scan</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* AI Damage Scanning Integration Tab */}
        {activeTab === 'damage-scan' && (
          <div className="max-w-xl mx-auto bg-white p-6 rounded-xl border border-slate-200 space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-bold">AI Damage Scanning Portal[span_2](start_span)[span_2](end_span)</h2>
              <p className="text-slate-500 text-xs mt-1">Upload checkout photos to log time-stamped proof instantly[span_3](start_span)[span_3](end_span).</p>
            </div>

            {scanStep === 'upload' && (
              <div className="border-2 border-dashed border-slate-200 p-8 rounded-xl text-center space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto"><Camera className="w-6 h-6" /></div>
                <div>
                  <button onClick={handleAiScan} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Simulate Live Photo Capture</button>
                  <p className="text-[11px] text-slate-400 mt-2">Logs dynamic time-stamp verification system[span_4](start_span)[span_4](end_span)</p>
                </div>
              </div>
            )}

            {scanStep === 'analyzing' && (
              <div className="p-8 text-center space-y-3">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-sm font-medium text-slate-600">AI scanning vehicle for pre-existing scratches...[span_5](start_span)[span_5](end_span)</p>
              </div>
            )}

            {scanStep === 'complete' && (
              <div className="space-y-4">
                <div className="p-4 bg-green-50 text-green-800 rounded-lg text-xs flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Scanning complete. Time-stamped data secured[span_6](start_span)[span_6](end_span)!</div>
                <div className="border border-slate-200 rounded-lg p-4 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">AI Logs:</p>
                  {scannedFeatures.map((f, idx) => <p key={idx} className="text-xs text-slate-600 flex items-center gap-1.5">▪️ {f}</p>)}
                </div>
                <button onClick={() => setActiveTab('key-activation')} className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">Proceed to Unlock Vehicle</button>
              </div>
            )}
          </div>
        )}

        {/* Contactless Mobile Key Activation Tab */}
        {activeTab === 'key-activation' && (
          <div className="max-w-md mx-auto bg-white p-6 rounded-xl border border-slate-200 text-center space-y-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto"><Smartphone className="w-8 h-8" /></div>
            <div>
              <h2 className="text-xl font-bold">Biometric Mobile Key[span_7](start_span)[span_7](end_span)</h2>
              <p className="text-slate-500 text-xs mt-1">Bypass the rental counter completely. Bluetooth link activates upon reaching vehicle area[span_8](start_span)[span_8](end_span).</p>
            </div>
            <div className="p-4 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-lg text-xs flex items-start gap-2 text-left">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Identity Verification Check: Biometric scans matching Driver's License OCR successfully processed[span_9](start_span)[span_9](end_span).</span>
            </div>
            <button onClick={() => alert('Bluetooth Key Synced. Pull door handle to open!')} className="w-full bg-green-600 text-white font-medium py-3 rounded-xl text-sm shadow-md shadow-green-100 hover:bg-green-700 transition-colors">Activate Bluetooth Key</button>
          </div>
        )}

      </main>
    </div>
  );
}
