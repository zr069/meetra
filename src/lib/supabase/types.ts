export type Profile = {
  id: string;
  display_name: string;
  avatar_url: string | null;
  bio: string | null;
  city: string | null;
  country: string | null;
  date_of_birth: string | null;
  interests: string[];
  language: string;
  location: unknown | null;
  created_at: string;
  updated_at: string;
};

export type Event = {
  id: string;
  creator_id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  category: string;
  location: unknown | null;
  address: string | null;
  city: string | null;
  event_date: string;
  max_participants: number | null;
  is_public: boolean;
  created_at: string;
};

export type EventParticipant = {
  event_id: string;
  user_id: string;
  status: 'going' | 'interested';
};

export type Connection = {
  id: string;
  requester_id: string;
  requested_id: string;
  status: 'pending' | 'accepted';
  created_at: string;
};

export type Message = {
  id: string;
  conversation_id: string;
  sender_id: string;
  content: string | null;
  image_url: string | null;
  created_at: string;
};

export type Conversation = {
  id: string;
  type: 'direct' | 'group' | 'event';
  reference_id: string | null;
  created_at: string;
};

export type ConversationMember = {
  conversation_id: string;
  user_id: string;
  last_read_at: string | null;
};

export type Group = {
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
  category: string | null;
  city: string | null;
  is_public: boolean;
  creator_id: string;
  created_at: string;
};

export type GroupMember = {
  group_id: string;
  user_id: string;
  role: 'admin' | 'member';
};

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Profile, 'id' | 'created_at'>>;
      };
      events: {
        Row: Event;
        Insert: Omit<Event, 'id' | 'created_at'>;
        Update: Partial<Omit<Event, 'id' | 'created_at'>>;
      };
      event_participants: {
        Row: EventParticipant;
        Insert: EventParticipant;
        Update: Partial<EventParticipant>;
      };
      connections: {
        Row: Connection;
        Insert: Omit<Connection, 'id' | 'created_at'>;
        Update: Partial<Omit<Connection, 'id' | 'created_at'>>;
      };
      messages: {
        Row: Message;
        Insert: Omit<Message, 'id' | 'created_at'>;
        Update: Partial<Omit<Message, 'id' | 'created_at'>>;
      };
      conversations: {
        Row: Conversation;
        Insert: Omit<Conversation, 'id' | 'created_at'>;
        Update: Partial<Omit<Conversation, 'id' | 'created_at'>>;
      };
      conversation_members: {
        Row: ConversationMember;
        Insert: ConversationMember;
        Update: Partial<ConversationMember>;
      };
      groups: {
        Row: Group;
        Insert: Omit<Group, 'id' | 'created_at'>;
        Update: Partial<Omit<Group, 'id' | 'created_at'>>;
      };
      group_members: {
        Row: GroupMember;
        Insert: GroupMember;
        Update: Partial<GroupMember>;
      };
    };
  };
};
