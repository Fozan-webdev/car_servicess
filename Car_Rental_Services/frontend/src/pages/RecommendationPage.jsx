import React, { useState } from 'react';
import axios from 'axios';
import { Sparkles, Car as CarIcon, DollarSign, Users, Fuel, Settings, Search, ArrowRight, ChevronRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { recommendationStyles as styles } from '../assets/dummyStyles';

const RecommendationPage = () => {
    const [preferences, setPreferences] = useState({
        budget: '',
        category: '',
        seats: '',
        transmission: '',
        fuelType: ''
    });
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [backendUrl] = useState('http://localhost:5000');

    const handleChange = (e) => {
        setPreferences({ ...preferences, [e.target.name]: e.target.value });
    };

    const getRecommendations = async (e) => {
        e.preventDefault();
        setLoading(true);
        setHasSearched(true);
        try {
            const res = await axios.get(`${backendUrl}/api/cars/recommend`, { params: preferences });
            setRecommendations(res.data);
        } catch (error) {
            console.error("Error fetching recommendations:", error);
        } finally {
            setLoading(false);
        }
    };

    const categories = ['Sedan', 'SUV', 'Luxury', 'Hatchback', 'Convertible', 'Coupe'];
    const transmissions = ['Automatic', 'Manual'];
    const fuelTypes = ['Gasoline', 'Diesel', 'Electric', 'Hybrid'];

    return (
        <div className={styles.pageContainer}>
            <Navbar />
            
            {/* Hero Section */}
            <header className={styles.heroSection}>
                <div className={styles.heroGlow1}></div>
                <div className={styles.heroGlow2}></div>
                
                <div className={styles.heroContent}>
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6 border border-orange-500/20">
                            <Sparkles size={16} />
                            <span>AI-Powered Recommendations</span>
                        </div>
                        <h1 className={styles.heroTitle}>
                            Find the <span className={styles.heroTitleAccent}>Perfect Car</span> for Your Journey
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Tell us your preferences, and our smart recommendation engine will find the best vehicles tailored specifically for your needs and budget.
                        </p>
                    </div>

                    {/* Preference Form */}
                    <div className={styles.formCard}>
                        <form onSubmit={getRecommendations} className={styles.formGrid}>
                            {/* Budget */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    <DollarSign size={16} className="text-orange-500" />
                                    Maximum Daily Budget
                                </label>
                                <input 
                                    type="number" 
                                    name="budget" 
                                    placeholder="e.g. 100" 
                                    value={preferences.budget}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </div>

                            {/* Category */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    <CarIcon size={16} className="text-orange-500" />
                                    Car Category
                                </label>
                                <select 
                                    name="category" 
                                    value={preferences.category}
                                    onChange={handleChange}
                                    className={styles.select}
                                >
                                    <option value="" className="bg-black text-white">Any Category</option>
                                    {categories.map(cat => <option key={cat} value={cat} className="bg-black text-white">{cat}</option>)}
                                </select>
                            </div>

                            {/* Seats */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    <Users size={16} className="text-orange-500" />
                                    Minimum Seats
                                </label>
                                <input 
                                    type="number" 
                                    name="seats" 
                                    placeholder="e.g. 4" 
                                    value={preferences.seats}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </div>

                            {/* Transmission */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    <Settings size={16} className="text-orange-500" />
                                    Transmission
                                </label>
                                <select 
                                    name="transmission" 
                                    value={preferences.transmission}
                                    onChange={handleChange}
                                    className={styles.select}
                                >
                                    <option value="" className="bg-black text-white">Any Transmission</option>
                                    {transmissions.map(tr => <option key={tr} value={tr} className="bg-black text-white">{tr}</option>)}
                                </select>
                            </div>

                            {/* Fuel Type */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    <Fuel size={16} className="text-orange-500" />
                                    Fuel Type
                                </label>
                                <select 
                                    name="fuelType" 
                                    value={preferences.fuelType}
                                    onChange={handleChange}
                                    className={styles.select}
                                >
                                    <option value="" className="bg-black text-white">Any Fuel Type</option>
                                    {fuelTypes.map(f => <option key={f} value={f} className="bg-black text-white">{f}</option>)}
                                </select>
                            </div>

                            {/* Submit Button */}
                            <div className="flex items-end">
                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className={styles.submitButton}
                                >
                                    {loading ? (
                                        <Loader2 className="animate-spin" size={20} />
                                    ) : (
                                        <>
                                            Find Recommendations
                                            <Search size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </header>

            {/* Results Section */}
            <main className={styles.resultsSection}>
                {!hasSearched ? (
                    <div className={styles.emptyState}>
                        <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CarIcon className="text-gray-600" size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-200 mb-2">Ready to explore?</h2>
                        <p className="text-gray-500">Adjust your preferences and click the button to see matching cars.</p>
                    </div>
                ) : recommendations.length > 0 ? (
                    <div>
                        <div className={styles.resultsHeader}>
                            <h2 className={styles.resultsTitle}>
                                <Sparkles className="text-orange-500" />
                                Top Matches For You
                            </h2>
                            <p className="text-gray-400 font-medium">{recommendations.length} cars found</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {recommendations.map((car, index) => (
                                <div 
                                    key={car._id} 
                                    className={styles.carCard}
                                    style={{ animation: 'pop 640ms cubic-bezier(.2, .9, .25, 1) both', animationDelay: `${index * 100}ms` }}
                                >
                                    <div className={styles.imageContainer}>
                                        <img 
                                            src={car.image ? `${backendUrl}/uploads/${car.image}` : '/placeholder-car.jpg'} 
                                            alt={`${car.make} ${car.model}`}
                                            className={styles.carImage}
                                        />
                                        <div className={styles.categoryBadge}>
                                            {car.category}
                                        </div>
                                        <div className={styles.matchBadge}>
                                            {car.matchPercentage}% Match
                                        </div>
                                    </div>

                                    <div className={styles.cardBody}>
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className={styles.carName}>
                                                    {car.make} {car.model}
                                                </h3>
                                                <p className={styles.carMeta}>{car.year} • {car.transmission}</p>
                                            </div>
                                            <div className={styles.priceContainer}>
                                                <span className={styles.priceValue}>${car.dailyRate}</span>
                                                <p className={styles.priceLabel}>Per Day</p>
                                            </div>
                                        </div>

                                        <div className={styles.specsContainer}>
                                            <div className={styles.specItem}>
                                                <Users size={18} className="text-orange-500" />
                                                <span className={styles.specValue}>{car.seats} Seats</span>
                                            </div>
                                            <div className={styles.specItem}>
                                                <Fuel size={18} className="text-orange-500" />
                                                <span className={styles.specValue}>{car.fuelType}</span>
                                            </div>
                                        </div>

                                        <Link 
                                            to={`/cars/${car._id}`}
                                            className={styles.viewButton}
                                        >
                                            View Details
                                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search className="text-orange-500" size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-200 mb-2">No perfect matches found</h2>
                        <p className="text-gray-500 mb-8">Try adjusting your preferences to see more options.</p>
                        <button 
                            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                            className="inline-flex items-center gap-2 text-orange-500 font-bold hover:gap-3 transition-all"
                        >
                            Update Preferences <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default RecommendationPage;
