import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Avatar, AvatarFallback } from './components/ui/avatar';
import { Separator } from './components/ui/separator';
import { Input } from './components/ui/input';
import { 
  Building2, 
  MapPin, 
  Globe, 
  Phone, 
  Mail, 
  Users, 
  Plus, 
  PhoneCall, 
  FileText, 
  Calendar,
  MoreHorizontal,
  Filter,
  Eye,
  ExternalLink,
  UserPlus,
  Search,
  Briefcase,
  BarChart3,
  MessageSquare,
  Settings,
  HelpCircle,
  Clock,
  Building,
  UserCheck,
  Target,
  TrendingUp
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('contacts');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="w-16 bg-slate-900 flex flex-col items-center py-4 space-y-6">
        {/* Logo */}
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">R</span>
        </div>
        
        {/* Navigation Icons */}
        <nav className="flex flex-col space-y-4">
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800 rounded">
            <Building2 className="h-5 w-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-blue-400 bg-slate-800 rounded">
            <Building className="h-5 w-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800 rounded">
            <Users className="h-5 w-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800 rounded">
            <Briefcase className="h-5 w-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800 rounded">
            <UserCheck className="h-5 w-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800 rounded">
            <BarChart3 className="h-5 w-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800 rounded">
            <MessageSquare className="h-5 w-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800 rounded">
            <Target className="h-5 w-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800 rounded">
            <TrendingUp className="h-5 w-5" />
          </button>
        </nav>
        
        {/* Bottom Icons */}
        <div className="flex-1"></div>
        <div className="flex flex-col space-y-4">
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800 rounded">
            <HelpCircle className="h-5 w-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800 rounded">
            <Clock className="h-5 w-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800 rounded">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Companies</span>
                <span className="text-sm text-muted-foreground">&gt;</span>
                <span className="text-sm">Page 1</span>
              </div>
              
              {/* Search Box */}
              <div className="relative w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search By Name, Job, Email & LinkedIn URL" 
                  className="pl-10 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Book a Demo</Button>
              <Button variant="outline" size="sm">Upgrade Your Account</Button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6 space-y-6">
          {/* Company Header Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-xl">
                      DM
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <h1 className="text-2xl font-semibold">Dunder Mifflin</h1>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>San Francisco</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Building2 className="h-4 w-4" />
                        <span>Business Supplies and Retail</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Action Buttons */}
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <PhoneCall className="h-4 w-4 mr-2" />
                    Log Call
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Add Note
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Job
                  </Button>
                  <Button variant="outline" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">All Contacts</p>
                    <p className="text-2xl font-semibold">67</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Notes & Calls</p>
                    <p className="text-2xl font-semibold">1</p>
                  </div>
                  <FileText className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Tasks</p>
                    <p className="text-2xl font-semibold">9</p>
                  </div>
                  <Calendar className="h-8 w-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Meetings</p>
                    <p className="text-2xl font-semibold">1</p>
                  </div>
                  <Users className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Company Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Company Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Website</label>
                        <div className="flex items-center space-x-2 mt-1">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <span>dundermifflin.co</span>
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Company Industry</label>
                        <p className="mt-1">Business Supplies and Retail</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Company Size</label>
                        <p className="mt-1">Not available</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Member Since Company</label>
                        <p className="mt-1">Not available</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Company Full Address</label>
                        <p className="mt-1">1215 Parnassus Ave San Francisco</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Company Locality</label>
                        <p className="mt-1">Not available</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Company Country</label>
                        <p className="mt-1">Not available</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Related Opted Out</label>
                        <p className="mt-1">No</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tabs Section */}
              <Card>
                <CardContent className="p-0">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <div className="border-b px-6 pt-6">
                      <TabsList className="grid w-full grid-cols-6 bg-muted/30">
                        <TabsTrigger value="contacts">Contacts</TabsTrigger>
                        <TabsTrigger value="jobs">Jobs</TabsTrigger>
                        <TabsTrigger value="candidates">Candidates</TabsTrigger>
                        <TabsTrigger value="activities">Activities</TabsTrigger>
                        <TabsTrigger value="notes">Notes</TabsTrigger>
                        <TabsTrigger value="files">Files</TabsTrigger>
                      </TabsList>
                    </div>
                    
                    <div className="p-6">
                      <TabsContent value="contacts" className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">All Contacts</h3>
                          <Button variant="outline" size="sm">
                            <UserPlus className="h-4 w-4 mr-2" />
                            Add Contact
                          </Button>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          All 67 contacts from this company will be displayed here.
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="jobs" className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Active Jobs</h3>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">Filter Jobs</Button>
                            <Button variant="outline" size="sm">View All Jobs</Button>
                            <Button variant="outline" size="sm">View Assigned Candidates</Button>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              <Plus className="h-4 w-4 mr-2" />
                              Add Job
                            </Button>
                          </div>
                        </div>
                        
                        <Card className="border-l-4 border-l-orange-500">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="space-y-2">
                                <h4 className="font-medium">Paper Sales Executive</h4>
                                <p className="text-sm text-muted-foreground">San Francisco</p>
                                <div className="flex items-center space-x-4 text-sm">
                                  <span>Candidates in Pipeline: 1</span>
                                  <span>Placed: 3</span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge className="bg-green-100 text-green-700">Open</Badge>
                                <Button variant="outline" size="sm">
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Pipeline
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <div className="text-center py-4 text-sm text-muted-foreground">
                          That's all the jobs 🎉
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="candidates">
                        <div className="text-center py-8 text-muted-foreground">
                          <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                          <p>No candidates data available</p>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="activities">
                        <div className="text-center py-8 text-muted-foreground">
                          <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                          <p>No activities data available</p>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="notes">
                        <div className="text-center py-8 text-muted-foreground">
                          <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                          <p>No notes data available</p>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="files">
                        <div className="text-center py-8 text-muted-foreground">
                          <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                          <p>No files uploaded</p>
                        </div>
                      </TabsContent>
                    </div>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Recent Activity</span>
                    <Button variant="ghost" size="sm">View All</Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm">Meeting boomerang with john doe</p>
                      <p className="text-xs text-muted-foreground">1 cancellation(s)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm">Meeting</p>
                      <p className="text-xs text-muted-foreground">BUSINESS DEVELOPMENT MEETING Aug 28, 2025, 2:30 PM - 4:00 PM Bahra RCPM Assignment Url EMPLOYER</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm">Bahra RCPM Assignment Url created a meeting</p>
                      <p className="text-xs text-muted-foreground">Aug 28, 2025, 2:30 PM</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">That's all the news, call logs, tasks & meetings, messages 😊</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <PhoneCall className="h-4 w-4 mr-2" />
                    Log a Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Add a Note
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Meeting
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add Contact
                  </Button>
                  <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Job
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}