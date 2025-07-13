'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Clock, TrendingDown, Headphones, Eye, Home, User, Building2, Car, Heart, BarChart3, Banknote, ShoppingCart } from 'lucide-react';
import { INDIAN_STATES } from '@/lib/constants';

// Form data interface
interface HeroFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  pincode: string;
  serviceType: string;
}

// Form errors interface
interface FormErrors {
  [key: string]: string;
}

// Hero section with benefits and form
export default function HeroSection() {
  const [formData, setFormData] = useState<HeroFormData>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    pincode: '',
    serviceType: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('Loan');

  // Service tabs data
  const serviceTabs = [
    {
      id: 'Loan',
      title: 'Loans',
      icon: '💰',
      data: [
        { type: 'Personal Loan', rate: '10.5% - 24%', tenure: '1-5 years', amount: '₹50K - ₹25L', icon: User },
        { type: 'Home Loan', rate: '8.5% - 12%', tenure: '5-30 years', amount: '₹5L - ₹5Cr', icon: Home },
        { type: 'Business Loan', rate: '12% - 18%', tenure: '1-7 years', amount: '₹1L - ₹50L', icon: Building2 },
        { type: 'Car Loan', rate: '8.8% - 15%', tenure: '1-7 years', amount: '₹1L - ₹50L', icon: Car },
        { type: 'Loan Against Property', rate: '9% - 14%', tenure: '5-20 years', amount: '₹5L - ₹10Cr', icon: Banknote }
      ]
    },
    {
      id: 'Insurance',
      title: 'Insurance',
      icon: '🛡️',
      data: [
        { type: 'Life Insurance', coverage: '₹5L - ₹2Cr', premium: 'From ₹500/month', features: 'Tax benefits, Maturity benefits', icon: Heart },
        { type: 'Health Insurance', coverage: '₹2L - ₹1Cr', premium: 'From ₹200/month', features: 'Cashless treatment, Pre-post hospitalization', icon: Shield },
        { type: 'General Insurance', coverage: 'Comprehensive', premium: 'Competitive rates', features: 'Vehicle, Home, Travel insurance', icon: Headphones }
      ]
    },
    {
      id: 'Investment',
      title: 'Investment',
      icon: '📈',
      data: [
        { type: 'Mutual Funds', returns: '8-15% p.a.', risk: 'Low to High', features: 'SIP starting ₹500, Professional management', icon: BarChart3 },
        { type: 'Fixed Deposit', returns: '6-8% p.a.', risk: 'Very Low', features: 'Guaranteed returns, Flexible tenure', icon: Banknote },
        { type: 'ULIP', returns: '8-12% p.a.', risk: 'Moderate', features: 'Insurance + Investment, Tax benefits', icon: TrendingDown }
      ]
    },
    {
      id: 'Property',
      title: 'Property',
      icon: '🏘️',
      data: [
        { type: 'Buy Property', service: 'Property search & verification', commission: '1-2%', features: 'Legal assistance, Documentation', icon: ShoppingCart },
        { type: 'Sell Property', service: 'Marketing & buyer connection', commission: '1-2%', features: 'Valuation, Marketing support', icon: Home },
        { type: 'Property Consultation', service: 'Investment advice', fee: 'Consultation fee', features: 'Market analysis, ROI calculation', icon: Eye }
      ]
    }
  ];

  // Service types for dropdown - categorized
  const serviceCategories = {
    'Loans': [
      { value: 'Personal Loan', icon: '💰' },
      { value: 'Business Loan', icon: '🏢' },
      { value: 'Home Loan', icon: '🏡' },
      { value: 'Mortgage Loan', icon: '🏠' },
      { value: 'Gadi Loan', icon: '🚗' }
    ],
    'Insurance': [
      { value: 'General Insurance', icon: '🛡️' },
      { value: 'Life Insurance', icon: '👨‍👩‍👧‍👦' },
      { value: 'Health Insurance', icon: '🏥' }
    ],
    'Investments': [
      { value: 'Mutual Fund', icon: '📈' },
      { value: 'Fixed Deposit', icon: '🏦' }
    ],
    'Property': [
      { value: 'Property (Buy/Sale)', icon: '🏘️' }
    ]
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode';
    }
    if (!formData.serviceType) newErrors.serviceType = 'Service type is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    alert('Application submitted successfully! We will contact you soon.');

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      pincode: '',
      serviceType: ''
    });

    setIsSubmitting(false);
  };

  // Handle input changes
  const handleInputChange = (field: keyof HeroFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section className="py-2 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Service Tabs Section - Left Side (Hidden on mobile, shown after form) */}
          <div className="order-2 lg:order-1">
            {/* Mobile Only Heading */}
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Our Services and rates.</h2>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-6">
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 ${activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                >
                  <span>{tab.icon}</span>
                  <span className="font-medium">{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              {serviceTabs.map((tab) => (
                activeTab === tab.id && (
                  <div key={tab.id} className="space-y-4">
                    {tab.data.map((item, index) => (
                      <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 transition-colors duration-200">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="p-2 rounded-lg bg-blue-600/20">
                            <item.icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.type}</h3>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {tab.id === 'Loan' && (
                            <span>Interest: <span className="text-blue-600 dark:text-blue-300">{(item as any).rate}</span> | Tenure: <span className="text-blue-600 dark:text-blue-300">{(item as any).tenure}</span> | Amount: <span className="text-blue-600 dark:text-blue-300">{(item as any).amount}</span></span>
                          )}
                          {tab.id === 'Insurance' && (
                            <span>Coverage: <span className="text-blue-600 dark:text-blue-300">{(item as any).coverage}</span> | Premium: <span className="text-blue-600 dark:text-blue-300">{(item as any).premium}</span> | Features: <span className="text-blue-600 dark:text-blue-300">{(item as any).features}</span></span>
                          )}
                          {tab.id === 'Investment' && (
                            <span>Returns: <span className="text-blue-600 dark:text-blue-300">{(item as any).returns}</span> | Risk: <span className="text-blue-600 dark:text-blue-300">{(item as any).risk}</span> | Features: <span className="text-blue-600 dark:text-blue-300">{(item as any).features}</span></span>
                          )}
                          {tab.id === 'Property' && (
                            <span>Service: <span className="text-blue-600 dark:text-blue-300">{(item as any).service}</span> | {(item as any).commission ? 'Commission' : 'Fee'}: <span className="text-blue-600 dark:text-blue-300">{(item as any).commission || (item as any).fee}</span> | Features: <span className="text-blue-3  00">{(item as any).features}</span></span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Form Section - Right Side (Shown first on mobile) */}
          <div className="order-1 lg:order-2">
            <Card className="shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 backdrop-blur-sm transition-colors duration-200">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-gray-900 dark:text-white">Apply for Service</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <Label htmlFor="fullName" className="text-gray-900 dark:text-white mb-2 block">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className={`bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white px-4 py-3 placeholder:text-gray-600 dark:placeholder:text-gray-400 transition-colors duration-200 ${errors.fullName ? 'border-red-500' : ''}`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-gray-900 dark:text-white mb-2 block">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white px-4 py-3 placeholder:text-gray-600 dark:placeholder:text-gray-400 transition-colors duration-200 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <Label htmlFor="phone" className="text-gray-900 dark:text-white mb-2 block">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white px-4 py-3 placeholder:text-gray-600 dark:placeholder:text-gray-400 transition-colors duration-200 ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* City, State, Pincode in one row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-gray-900 dark:text-white mb-2 block">City *</Label>
                      <Input
                        id="city"
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className={`bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white px-4 py-3 placeholder:text-gray-600 dark:placeholder:text-gray-400 transition-colors duration-200 ${errors.city ? 'border-red-500' : ''}`}
                        placeholder="Enter your city"
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>

                    <div>
                      <Label htmlFor="state" className="text-gray-900 dark:text-white mb-2 block">State *</Label>
                      <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                        <SelectTrigger className={`bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white px-4 py-3 transition-colors duration-200 ${errors.state ? 'border-red-500' : ''}`}>
                          <SelectValue placeholder="Select state" className="text-gray-600 dark:text-gray-400" />
                        </SelectTrigger>
                        <SelectContent className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                          {INDIAN_STATES.map((state) => (
                            <SelectItem key={state} value={state} className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">{state}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                    </div>

                    <div>
                      <Label htmlFor="pincode" className="text-gray-900 dark:text-white mb-2 block">Pincode *</Label>
                      <Input
                        id="pincode"
                        type="text"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange('pincode', e.target.value)}
                        className={`bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white px-4 py-3 placeholder:text-gray-600 dark:placeholder:text-gray-400 transition-colors duration-200 ${errors.pincode ? 'border-red-500' : ''}`}
                        placeholder="Enter pincode"
                      />
                      {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <Label htmlFor="serviceType" className="text-gray-900 dark:text-white mb-2 block">Service Type *</Label>
                    <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                      <SelectTrigger className={`bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white px-4 py-3 transition-colors duration-200 ${errors.serviceType ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Select service type" className="text-gray-600 dark:text-gray-400" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-64 overflow-y-auto">
                        {Object.entries(serviceCategories).map(([category, services]) => (
                          <div key={category}>
                            <div className="px-2 py-1.5 text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                              {category}
                            </div>
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.value} className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 pl-4">
                                <div className="flex items-center">
                                  <span className="mr-2">{service.icon}</span>
                                  {service.value}
                                </div>
                              </SelectItem>
                            ))}
                          </div>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transition-colors duration-200"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}