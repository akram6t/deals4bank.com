'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Clock, TrendingDown, Headphones, Eye } from 'lucide-react';
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

  // Benefits data with icons
  const benefits = [
    { icon: Shield, text: '100% Secure', color: 'text-blue-600' },
    { icon: Clock, text: 'Quick Approval', color: 'text-green-600' },
    { icon: TrendingDown, text: 'Best Rates', color: 'text-purple-600' },
    { icon: Headphones, text: '24/7 Support', color: 'text-orange-600' },
    { icon: Eye, text: 'No Hidden Charges', color: 'text-red-600' }
  ];

  // Service types for dropdown
  const serviceTypes = [
    { value: 'Personal Loan', icon: '💰' },
    { value: 'Business Loan', icon: '🏢' },
    { value: 'Home Loan', icon: '🏡' },
    { value: 'Mortgage Loan', icon: '🏠' },
    { value: 'Gadi Loan', icon: '🚗' },
    { value: 'General Insurance', icon: '🛡️' },
    { value: 'Life Insurance', icon: '👨‍👩‍👧‍👦' },
    { value: 'Health Insurance', icon: '🏥' },
    { value: 'Mutual Fund', icon: '📈' },
    { value: 'Fixed Deposit', icon: '🏦' },
    { value: 'Property (Buy/Sale)', icon: '🏘️' }
  ];

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
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Benefits Section - Left Side (Hidden on mobile, shown after form) */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Your Trusted Financial Partner
            </h1>
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full bg-white shadow-md ${benefit.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-medium text-white">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Section - Right Side (Shown first on mobile) */}
          <div className="order-1 lg:order-2">
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-gray-900">Apply for Service</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className={`border-gray-300 px-4 py-3 ${errors.fullName ? 'border-red-500' : ''}`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`border-gray-300 px-4 py-3 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`border-gray-300 px-4 py-3 ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* City, State, Pincode in one row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className={`border-gray-300 px-4 py-3 ${errors.city ? 'border-red-500' : ''}`}
                        placeholder="Enter your city"
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                        <SelectTrigger className={`border-gray-300 px-4 py-3 h-12 ${errors.state ? 'border-red-500' : ''}`}>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          {INDIAN_STATES.map((state) => (
                            <SelectItem key={state} value={state}>{state}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        type="text"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange('pincode', e.target.value)}
                        className={`border-gray-300 px-4 py-3 ${errors.pincode ? 'border-red-500' : ''}`}
                        placeholder="Enter pincode"
                      />
                      {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                      <SelectTrigger className={`border-gray-300 px-4 py-3 h-12 ${errors.serviceType ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            <div className="flex items-center">
                              <span className="mr-2">{service.icon}</span>
                              {service.value}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
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