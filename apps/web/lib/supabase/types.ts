export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      campuses: {
        Row: {
          campus_id: string;
          days_parsed: number;
          last_updated: string;
          logo: string;
          name: string;
          record_count: number;
        };
        Insert: {
          campus_id: string;
          days_parsed: number;
          last_updated: string;
          logo: string;
          name: string;
          record_count: number;
        };
        Update: {
          campus_id?: string;
          days_parsed?: number;
          last_updated?: string;
          logo?: string;
          name?: string;
          record_count?: number;
        };
        Relationships: [];
      };
      records: {
        Row: {
          campus: string;
          case_number: string | null;
          date_occurred: string | null;
          date_reported: string | null;
          disposition: string | null;
          incident: string | null;
          location: string | null;
          parsed_date_occurred: string | null;
          parsed_date_reported: string | null;
          parsed_location: string | null;
          parsed_time_occurred: string | null;
          record_id: string;
          summary: string | null;
          time_occurred: string | null;
        };
        Insert: {
          campus: string;
          case_number?: string | null;
          date_occurred?: string | null;
          date_reported?: string | null;
          disposition?: string | null;
          incident?: string | null;
          location?: string | null;
          parsed_date_occurred?: string | null;
          parsed_date_reported?: string | null;
          parsed_location?: string | null;
          parsed_time_occurred?: string | null;
          record_id: string;
          summary?: string | null;
          time_occurred?: string | null;
        };
        Update: {
          campus?: string;
          case_number?: string | null;
          date_occurred?: string | null;
          date_reported?: string | null;
          disposition?: string | null;
          incident?: string | null;
          location?: string | null;
          parsed_date_occurred?: string | null;
          parsed_date_reported?: string | null;
          parsed_location?: string | null;
          parsed_time_occurred?: string | null;
          record_id?: string;
          summary?: string | null;
          time_occurred?: string | null;
        };
        Relationships: [];
      };
      ucsd_locations: {
        Row: {
          count: number | null;
          latitude: number | null;
          location: string | null;
          longitude: number | null;
          parsed_location: string;
        };
        Insert: {
          count?: number | null;
          latitude?: number | null;
          location?: string | null;
          longitude?: number | null;
          parsed_location: string;
        };
        Update: {
          count?: number | null;
          latitude?: number | null;
          location?: string | null;
          longitude?: number | null;
          parsed_location?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      campus_count: {
        Args: Record<PropertyKey, never>;
        Returns: number;
      };
      days_parsed_count: {
        Args: Record<PropertyKey, never>;
        Returns: number;
      };
      random_ucsd: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      recent_ucsd: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      record_count: {
        Args: Record<PropertyKey, never>;
        Returns: number;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
