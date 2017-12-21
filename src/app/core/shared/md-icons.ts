import {Injectable} from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class MdIconsService {
    private icons = [
        {
            "class": "3d_rotation",
            "label": "3d Rotation"
        },
        {
            "class": "ac_unit",
            "label": "Ac Unit"
        },
        {
            "class": "access_alarm",
            "label": "Access Alarm"
        },
        {
            "class": "access_alarms",
            "label": "Access Alarms"
        },
        {
            "class": "access_time",
            "label": "Access Time"
        },
        {
            "class": "accessibility",
            "label": "Accessibility"
        },
        {
            "class": "accessible",
            "label": "Accessible"
        },
        {
            "class": "account_balance",
            "label": "Account Balance"
        },
        {
            "class": "account_balance_wallet",
            "label": "Account Balance Wallet"
        },
        {
            "class": "account_box",
            "label": "Account Box"
        },
        {
            "class": "account_circle",
            "label": "Account Circle"
        },
        {
            "class": "adb",
            "label": "Adb"
        },
        {
            "class": "add",
            "label": "Add"
        },
        {
            "class": "add_a_photo",
            "label": "Add A Photo"
        },
        {
            "class": "add_alarm",
            "label": "Add Alarm"
        },
        {
            "class": "add_alert",
            "label": "Add Alert"
        },
        {
            "class": "add_box",
            "label": "Add Box"
        },
        {
            "class": "add_circle",
            "label": "Add Circle"
        },
        {
            "class": "add_circle_outline",
            "label": "Add Circle Outline"
        },
        {
            "class": "add_location",
            "label": "Add Location"
        },
        {
            "class": "add_shopping_cart",
            "label": "Add Shopping Cart"
        },
        {
            "class": "add_to_photos",
            "label": "Add To Photos"
        },
        {
            "class": "add_to_queue",
            "label": "Add To Queue"
        },
        {
            "class": "adjust",
            "label": "Adjust"
        },
        {
            "class": "airline_seat_flat",
            "label": "Airline Seat Flat"
        },
        {
            "class": "airline_seat_flat_angled",
            "label": "Airline Seat Flat Angled"
        },
        {
            "class": "airline_seat_individual_suite",
            "label": "Airline Seat Individual Suite"
        },
        {
            "class": "airline_seat_legroom_extra",
            "label": "Airline Seat Legroom Extra"
        },
        {
            "class": "airline_seat_legroom_normal",
            "label": "Airline Seat Legroom Normal"
        },
        {
            "class": "airline_seat_legroom_reduced",
            "label": "Airline Seat Legroom Reduced"
        },
        {
            "class": "airline_seat_recline_extra",
            "label": "Airline Seat Recline Extra"
        },
        {
            "class": "airline_seat_recline_normal",
            "label": "Airline Seat Recline Normal"
        },
        {
            "class": "airplanemode_active",
            "label": "Airplanemode Active"
        },
        {
            "class": "airplanemode_inactive",
            "label": "Airplanemode Inactive"
        },
        {
            "class": "airplay",
            "label": "Airplay"
        },
        {
            "class": "airport_shuttle",
            "label": "Airport Shuttle"
        },
        {
            "class": "alarm",
            "label": "Alarm"
        },
        {
            "class": "alarm_add",
            "label": "Alarm Add"
        },
        {
            "class": "alarm_off",
            "label": "Alarm Off"
        },
        {
            "class": "alarm_on",
            "label": "Alarm On"
        },
        {
            "class": "album",
            "label": "Album"
        },
        {
            "class": "all_inclusive",
            "label": "All Inclusive"
        },
        {
            "class": "all_out",
            "label": "All Out"
        },
        {
            "class": "android",
            "label": "Android"
        },
        {
            "class": "announcement",
            "label": "Announcement"
        },
        {
            "class": "apps",
            "label": "Apps"
        },
        {
            "class": "archive",
            "label": "Archive"
        },
        {
            "class": "arrow_back",
            "label": "Arrow Back"
        },
        {
            "class": "arrow_downward",
            "label": "Arrow Downward"
        },
        {
            "class": "arrow_drop_down",
            "label": "Arrow Drop Down"
        },
        {
            "class": "arrow_drop_down_circle",
            "label": "Arrow Drop Down Circle"
        },
        {
            "class": "arrow_drop_up",
            "label": "Arrow Drop Up"
        },
        {
            "class": "arrow_forward",
            "label": "Arrow Forward"
        },
        {
            "class": "arrow_upward",
            "label": "Arrow Upward"
        },
        {
            "class": "art_track",
            "label": "Art Track"
        },
        {
            "class": "aspect_ratio",
            "label": "Aspect Ratio"
        },
        {
            "class": "assessment",
            "label": "Assessment"
        },
        {
            "class": "assignment",
            "label": "Assignment"
        },
        {
            "class": "assignment_ind",
            "label": "Assignment Ind"
        },
        {
            "class": "assignment_late",
            "label": "Assignment Late"
        },
        {
            "class": "assignment_return",
            "label": "Assignment Return"
        },
        {
            "class": "assignment_returned",
            "label": "Assignment Returned"
        },
        {
            "class": "assignment_turned_in",
            "label": "Assignment Turned In"
        },
        {
            "class": "assistant",
            "label": "Assistant"
        },
        {
            "class": "assistant_photo",
            "label": "Assistant Photo"
        },
        {
            "class": "attach_file",
            "label": "Attach File"
        },
        {
            "class": "attach_money",
            "label": "Attach Money"
        },
        {
            "class": "attachment",
            "label": "Attachment"
        },
        {
            "class": "audiotrack",
            "label": "Audiotrack"
        },
        {
            "class": "autorenew",
            "label": "Autorenew"
        },
        {
            "class": "at_timer",
            "label": "At Timer"
        },
        {
            "class": "backspace",
            "label": "Backspace"
        },
        {
            "class": "backup",
            "label": "Backup"
        },
        {
            "class": "battery_alert",
            "label": "Battery Alert"
        },
        {
            "class": "battery_charging_full",
            "label": "Battery Charging Full"
        },
        {
            "class": "battery_full",
            "label": "Battery Full"
        },
        {
            "class": "battery_std",
            "label": "Battery Std"
        },
        {
            "class": "battery_unknown",
            "label": "Battery Unknown"
        },
        {
            "class": "beach_access",
            "label": "Beach Access"
        },
        {
            "class": "beenhere",
            "label": "Beenhere"
        },
        {
            "class": "block",
            "label": "Block"
        },
        {
            "class": "bluetooth",
            "label": "Bluetooth"
        },
        {
            "class": "bluetooth_audio",
            "label": "Bluetooth Audio"
        },
        {
            "class": "bluetooth_connected",
            "label": "Bluetooth Connected"
        },
        {
            "class": "bluetooth_disabled",
            "label": "Bluetooth Disabled"
        },
        {
            "class": "bluetooth_searching",
            "label": "Bluetooth Searching"
        },
        {
            "class": "blur_circular",
            "label": "Blur Circular"
        },
        {
            "class": "blur_linear",
            "label": "Blur Linear"
        },
        {
            "class": "blur_off",
            "label": "Blur Off"
        },
        {
            "class": "blur_on",
            "label": "Blur On"
        },
        {
            "class": "book",
            "label": "Book"
        },
        {
            "class": "bookmark",
            "label": "Bookmark"
        },
        {
            "class": "bookmark_border",
            "label": "Bookmark Border"
        },
        {
            "class": "border_all",
            "label": "Border All"
        },
        {
            "class": "border_bottom",
            "label": "Border Bottom"
        },
        {
            "class": "border_clear",
            "label": "Border Clear"
        },
        {
            "class": "border_color",
            "label": "Border Color"
        },
        {
            "class": "border_horizontal",
            "label": "Border Horizontal"
        },
        {
            "class": "border_inner",
            "label": "Border Inner"
        },
        {
            "class": "border_left",
            "label": "Border Left"
        },
        {
            "class": "border_outer",
            "label": "Border Outer"
        },
        {
            "class": "border_right",
            "label": "Border Right"
        },
        {
            "class": "border_style",
            "label": "Border Style"
        },
        {
            "class": "border_top",
            "label": "Border Top"
        },
        {
            "class": "border_vertical",
            "label": "Border Vertical"
        },
        {
            "class": "branding_watermark",
            "label": "Branding Watermark"
        },
        {
            "class": "brightness_1",
            "label": "Brightness 1"
        },
        {
            "class": "brightness_2",
            "label": "Brightness 2"
        },
        {
            "class": "brightness_3",
            "label": "Brightness 3"
        },
        {
            "class": "brightness_4",
            "label": "Brightness 4"
        },
        {
            "class": "brightness_5",
            "label": "Brightness 5"
        },
        {
            "class": "brightness_6",
            "label": "Brightness 6"
        },
        {
            "class": "brightness_7",
            "label": "Brightness 7"
        },
        {
            "class": "brightness_auto",
            "label": "Brightness Auto"
        },
        {
            "class": "brightness_high",
            "label": "Brightness High"
        },
        {
            "class": "brightness_low",
            "label": "Brightness Low"
        },
        {
            "class": "brightness_medium",
            "label": "Brightness Medium"
        },
        {
            "class": "broken_image",
            "label": "Broken Image"
        },
        {
            "class": "brush",
            "label": "Brush"
        },
        {
            "class": "bubble_chart",
            "label": "Bubble Chart"
        },
        {
            "class": "bug_report",
            "label": "Bug Report"
        },
        {
            "class": "build",
            "label": "Build"
        },
        {
            "class": "burst_mode",
            "label": "Burst Mode"
        },
        {
            "class": "business",
            "label": "Business"
        },
        {
            "class": "business_center",
            "label": "Business Center"
        },
        {
            "class": "cached",
            "label": "Cached"
        },
        {
            "class": "cake",
            "label": "Cake"
        },
        {
            "class": "call",
            "label": "Call"
        },
        {
            "class": "call_end",
            "label": "Call End"
        },
        {
            "class": "call_made",
            "label": "Call Made"
        },
        {
            "class": "call_merge",
            "label": "Call Merge"
        },
        {
            "class": "call_missed",
            "label": "Call Missed"
        },
        {
            "class": "call_missed_outgoing",
            "label": "Call Missed Outgoing"
        },
        {
            "class": "call_received",
            "label": "Call Received"
        },
        {
            "class": "call_split",
            "label": "Call Split"
        },
        {
            "class": "call_to_action",
            "label": "Call To Action"
        },
        {
            "class": "camera",
            "label": "Camera"
        },
        {
            "class": "camera_alt",
            "label": "Camera Alt"
        },
        {
            "class": "camera_enhance",
            "label": "Camera Enhance"
        },
        {
            "class": "camera_front",
            "label": "Camera Front"
        },
        {
            "class": "camera_rear",
            "label": "Camera Rear"
        },
        {
            "class": "camera_roll",
            "label": "Camera Roll"
        },
        {
            "class": "cancel",
            "label": "Cancel"
        },
        {
            "class": "card_giftcard",
            "label": "Card Giftcard"
        },
        {
            "class": "card_membership",
            "label": "Card Membership"
        },
        {
            "class": "card_travel",
            "label": "Card Travel"
        },
        {
            "class": "casino",
            "label": "Casino"
        },
        {
            "class": "cast",
            "label": "Cast"
        },
        {
            "class": "cast_connected",
            "label": "Cast Connected"
        },
        {
            "class": "center_focus_strong",
            "label": "Center Focus Strong"
        },
        {
            "class": "center_focus_weak",
            "label": "Center Focus Weak"
        },
        {
            "class": "change_history",
            "label": "Change History"
        },
        {
            "class": "chat",
            "label": "Chat"
        },
        {
            "class": "chat_bubble",
            "label": "Chat Bubble"
        },
        {
            "class": "chat_bubble_outline",
            "label": "Chat Bubble Outline"
        },
        {
            "class": "check",
            "label": "Check"
        },
        {
            "class": "check_box",
            "label": "Check Box"
        },
        {
            "class": "check_box_outline_blank",
            "label": "Check Box Outline Blank"
        },
        {
            "class": "check_circle",
            "label": "Check Circle"
        },
        {
            "class": "chevron_left",
            "label": "Chevron Left"
        },
        {
            "class": "chevron_right",
            "label": "Chevron Right"
        },
        {
            "class": "child_care",
            "label": "Child Care"
        },
        {
            "class": "child_friendly",
            "label": "Child Friendly"
        },
        {
            "class": "chrome_reader_mode",
            "label": "Chrome Reader Mode"
        },
        {
            "class": "class",
            "label": "Class"
        },
        {
            "class": "clear",
            "label": "Clear"
        },
        {
            "class": "clear_all",
            "label": "Clear All"
        },
        {
            "class": "close",
            "label": "Close"
        },
        {
            "class": "closed_caption",
            "label": "Closed Caption"
        },
        {
            "class": "cloud",
            "label": "Cloud"
        },
        {
            "class": "cloud_circle",
            "label": "Cloud Circle"
        },
        {
            "class": "cloud_done",
            "label": "Cloud Done"
        },
        {
            "class": "cloud_download",
            "label": "Cloud Download"
        },
        {
            "class": "cloud_off",
            "label": "Cloud Off"
        },
        {
            "class": "cloud_queue",
            "label": "Cloud Queue"
        },
        {
            "class": "cloud_upload",
            "label": "Cloud Upload"
        },
        {
            "class": "code",
            "label": "Code"
        },
        {
            "class": "collections",
            "label": "Collections"
        },
        {
            "class": "collections_bookmark",
            "label": "Collections Bookmark"
        },
        {
            "class": "color_lens",
            "label": "Color Lens"
        },
        {
            "class": "colorize",
            "label": "Colorize"
        },
        {
            "class": "comment",
            "label": "Comment"
        },
        {
            "class": "compare",
            "label": "Compare"
        },
        {
            "class": "compare_arrows",
            "label": "Compare Arrows"
        },
        {
            "class": "computer",
            "label": "Computer"
        },
        {
            "class": "confirmation_number",
            "label": "Confirmation Number"
        },
        {
            "class": "contact_mail",
            "label": "Contact Mail"
        },
        {
            "class": "contact_phone",
            "label": "Contact Phone"
        },
        {
            "class": "contacts",
            "label": "Contacts"
        },
        {
            "class": "content_copy",
            "label": "Content Copy"
        },
        {
            "class": "content_cut",
            "label": "Content Cut"
        },
        {
            "class": "content_paste",
            "label": "Content Paste"
        },
        {
            "class": "control_point",
            "label": "Control Point"
        },
        {
            "class": "control_point_duplicate",
            "label": "Control Point Duplicate"
        },
        {
            "class": "copyright",
            "label": "Copyright"
        },
        {
            "class": "create",
            "label": "Create"
        },
        {
            "class": "create_new_folder",
            "label": "Create New Folder"
        },
        {
            "class": "credit_card",
            "label": "Credit Card"
        },
        {
            "class": "crop",
            "label": "Crop"
        },
        {
            "class": "crop_16_9",
            "label": "Crop 16 9"
        },
        {
            "class": "crop_3_2",
            "label": "Crop 3 2"
        },
        {
            "class": "crop_5_4",
            "label": "Crop 5 4"
        },
        {
            "class": "crop_7_5",
            "label": "Crop 7 5"
        },
        {
            "class": "crop_din",
            "label": "Crop Din"
        },
        {
            "class": "crop_free",
            "label": "Crop Free"
        },
        {
            "class": "crop_landscape",
            "label": "Crop Landscape"
        },
        {
            "class": "crop_original",
            "label": "Crop Original"
        },
        {
            "class": "crop_portrait",
            "label": "Crop Portrait"
        },
        {
            "class": "crop_rotate",
            "label": "Crop Rotate"
        },
        {
            "class": "crop_square",
            "label": "Crop Square"
        },
        {
            "class": "dashboard",
            "label": "Dashboard"
        },
        {
            "class": "data_usage",
            "label": "Data Usage"
        },
        {
            "class": "date_range",
            "label": "Date Range"
        },
        {
            "class": "dehaze",
            "label": "Dehaze"
        },
        {
            "class": "delete",
            "label": "Delete"
        },
        {
            "class": "delete_forever",
            "label": "Delete Forever"
        },
        {
            "class": "delete_sweep",
            "label": "Delete Sweep"
        },
        {
            "class": "description",
            "label": "Description"
        },
        {
            "class": "desktop_mac",
            "label": "Desktop Mac"
        },
        {
            "class": "desktop_windows",
            "label": "Desktop Windows"
        },
        {
            "class": "details",
            "label": "Details"
        },
        {
            "class": "developer_board",
            "label": "Developer Board"
        },
        {
            "class": "developer_mode",
            "label": "Developer Mode"
        },
        {
            "class": "device_hub",
            "label": "Device Hub"
        },
        {
            "class": "devices",
            "label": "Devices"
        },
        {
            "class": "devices_other",
            "label": "Devices Other"
        },
        {
            "class": "dialer_sip",
            "label": "Dialer Sip"
        },
        {
            "class": "dialpad",
            "label": "Dialpad"
        },
        {
            "class": "directions",
            "label": "Directions"
        },
        {
            "class": "directions_bike",
            "label": "Directions Bike"
        },
        {
            "class": "directions_boat",
            "label": "Directions Boat"
        },
        {
            "class": "directions_bus",
            "label": "Directions Bus"
        },
        {
            "class": "directions_car",
            "label": "Directions Car"
        },
        {
            "class": "directions_railway",
            "label": "Directions Railway"
        },
        {
            "class": "directions_run",
            "label": "Directions Run"
        },
        {
            "class": "directions_subway",
            "label": "Directions Subway"
        },
        {
            "class": "directions_transit",
            "label": "Directions Transit"
        },
        {
            "class": "directions_walk",
            "label": "Directions Walk"
        },
        {
            "class": "disc_full",
            "label": "Disc Full"
        },
        {
            "class": "dns",
            "label": "Dns"
        },
        {
            "class": "do_not_disturb",
            "label": "Do Not Disturb"
        },
        {
            "class": "do_not_disturb_alt",
            "label": "Do Not Disturb Alt"
        },
        {
            "class": "do_not_disturb_off",
            "label": "Do Not Disturb Off"
        },
        {
            "class": "do_not_disturb_on",
            "label": "Do Not Disturb On"
        },
        {
            "class": "dock",
            "label": "Dock"
        },
        {
            "class": "domain",
            "label": "Domain"
        },
        {
            "class": "done",
            "label": "Done"
        },
        {
            "class": "done_all",
            "label": "Done All"
        },
        {
            "class": "donut_large",
            "label": "Donut Large"
        },
        {
            "class": "donut_small",
            "label": "Donut Small"
        },
        {
            "class": "drafts",
            "label": "Drafts"
        },
        {
            "class": "drag_handle",
            "label": "Drag Handle"
        },
        {
            "class": "drive_eta",
            "label": "Drive Eta"
        },
        {
            "class": "dvr",
            "label": "Dvr"
        },
        {
            "class": "edit",
            "label": "Edit"
        },
        {
            "class": "edit_location",
            "label": "Edit Location"
        },
        {
            "class": "eject",
            "label": "Eject"
        },
        {
            "class": "email",
            "label": "Email"
        },
        {
            "class": "enhanced_encryption",
            "label": "Enhanced Encryption"
        },
        {
            "class": "equalizer",
            "label": "Equalizer"
        },
        {
            "class": "error",
            "label": "Error"
        },
        {
            "class": "error_outline",
            "label": "Error Outline"
        },
        {
            "class": "euro_symbol",
            "label": "Euro Symbol"
        },
        {
            "class": "ev_station",
            "label": "Ev Station"
        },
        {
            "class": "event",
            "label": "Event"
        },
        {
            "class": "event_available",
            "label": "Event Atailable"
        },
        {
            "class": "event_busy",
            "label": "Event Busy"
        },
        {
            "class": "event_note",
            "label": "Event Note"
        },
        {
            "class": "event_seat",
            "label": "Event Seat"
        },
        {
            "class": "exit_to_app",
            "label": "Exit To App"
        },
        {
            "class": "expand_less",
            "label": "Expand Less"
        },
        {
            "class": "expand_more",
            "label": "Expand More"
        },
        {
            "class": "explicit",
            "label": "Explicit"
        },
        {
            "class": "explore",
            "label": "Explore"
        },
        {
            "class": "exposure",
            "label": "Exposure"
        },
        {
            "class": "exposure_neg_1",
            "label": "Exposure Neg 1"
        },
        {
            "class": "exposure_neg_2",
            "label": "Exposure Neg 2"
        },
        {
            "class": "exposure_plus_1",
            "label": "Exposure Plus 1"
        },
        {
            "class": "exposure_plus_2",
            "label": "Exposure Plus 2"
        },
        {
            "class": "exposure_zero",
            "label": "Exposure Zero"
        },
        {
            "class": "extension",
            "label": "Extension"
        },
        {
            "class": "face",
            "label": "Face"
        },
        {
            "class": "fast_forward",
            "label": "Fast Forward"
        },
        {
            "class": "fast_rewind",
            "label": "Fast Rewind"
        },
        {
            "class": "favorite",
            "label": "Favorite"
        },
        {
            "class": "favorite_border",
            "label": "Favorite Border"
        },
        {
            "class": "featured_play_list",
            "label": "Featured Play List"
        },
        {
            "class": "featured_video",
            "label": "Featured Video"
        },
        {
            "class": "feedback",
            "label": "Feedback"
        },
        {
            "class": "fiber_dvr",
            "label": "Fiber Dvr"
        },
        {
            "class": "fiber_manual_record",
            "label": "Fiber Manual Record"
        },
        {
            "class": "fiber_new",
            "label": "Fiber New"
        },
        {
            "class": "fiber_pin",
            "label": "Fiber Pin"
        },
        {
            "class": "fiber_smart_record",
            "label": "Fiber Smart Record"
        },
        {
            "class": "file_download",
            "label": "File Download"
        },
        {
            "class": "file_upload",
            "label": "File Upload"
        },
        {
            "class": "filter",
            "label": "Filter"
        },
        {
            "class": "filter_1",
            "label": "Filter 1"
        },
        {
            "class": "filter_2",
            "label": "Filter 2"
        },
        {
            "class": "filter_3",
            "label": "Filter 3"
        },
        {
            "class": "filter_4",
            "label": "Filter 4"
        },
        {
            "class": "filter_5",
            "label": "Filter 5"
        },
        {
            "class": "filter_6",
            "label": "Filter 6"
        },
        {
            "class": "filter_7",
            "label": "Filter 7"
        },
        {
            "class": "filter_8",
            "label": "Filter 8"
        },
        {
            "class": "filter_9",
            "label": "Filter 9"
        },
        {
            "class": "filter_9_plus",
            "label": "Filter 9 Plus"
        },
        {
            "class": "filter_b_and_w",
            "label": "Filter B And W"
        },
        {
            "class": "filter_center_focus",
            "label": "Filter Center Focus"
        },
        {
            "class": "filter_drama",
            "label": "Filter Drama"
        },
        {
            "class": "filter_frames",
            "label": "Filter Frames"
        },
        {
            "class": "filter_hdr",
            "label": "Filter Hdr"
        },
        {
            "class": "filter_list",
            "label": "Filter List"
        },
        {
            "class": "filter_none",
            "label": "Filter None"
        },
        {
            "class": "filter_tilt_shift",
            "label": "Filter Tilt Shift"
        },
        {
            "class": "filter_vintage",
            "label": "Filter Vintage"
        },
        {
            "class": "find_in_page",
            "label": "Find In Page"
        },
        {
            "class": "find_replace",
            "label": "Find Replace"
        },
        {
            "class": "fingerprint",
            "label": "Fingerprint"
        },
        {
            "class": "first_page",
            "label": "First Page"
        },
        {
            "class": "fitness_center",
            "label": "Fitness Center"
        },
        {
            "class": "flag",
            "label": "Flag"
        },
        {
            "class": "flare",
            "label": "Flare"
        },
        {
            "class": "flash_auto",
            "label": "Flash Auto"
        },
        {
            "class": "flash_off",
            "label": "Flash Off"
        },
        {
            "class": "flash_on",
            "label": "Flash On"
        },
        {
            "class": "flight",
            "label": "Flight"
        },
        {
            "class": "flight_land",
            "label": "Flight Land"
        },
        {
            "class": "flight_takeoff",
            "label": "Flight Takeoff"
        },
        {
            "class": "flip",
            "label": "Flip"
        },
        {
            "class": "flip_to_back",
            "label": "Flip To Back"
        },
        {
            "class": "flip_to_front",
            "label": "Flip To Front"
        },
        {
            "class": "folder",
            "label": "Folder"
        },
        {
            "class": "folder_open",
            "label": "Folder Open"
        },
        {
            "class": "folder_shared",
            "label": "Folder Shared"
        },
        {
            "class": "folder_special",
            "label": "Folder Special"
        },
        {
            "class": "font_download",
            "label": "Font Download"
        },
        {
            "class": "format_align_center",
            "label": "Format Align Center"
        },
        {
            "class": "format_align_justify",
            "label": "Format Align Justify"
        },
        {
            "class": "format_align_left",
            "label": "Format Align Left"
        },
        {
            "class": "format_align_right",
            "label": "Format Align Right"
        },
        {
            "class": "format_bold",
            "label": "Format Bold"
        },
        {
            "class": "format_clear",
            "label": "Format Clear"
        },
        {
            "class": "format_color_fill",
            "label": "Format Color Fill"
        },
        {
            "class": "format_color_reset",
            "label": "Format Color Reset"
        },
        {
            "class": "format_color_text",
            "label": "Format Color Text"
        },
        {
            "class": "format_indent_decrease",
            "label": "Format Indent Decrease"
        },
        {
            "class": "format_indent_increase",
            "label": "Format Indent Increase"
        },
        {
            "class": "format_italic",
            "label": "Format Italic"
        },
        {
            "class": "format_line_spacing",
            "label": "Format Line Spacing"
        },
        {
            "class": "format_list_bulleted",
            "label": "Format List Bulleted"
        },
        {
            "class": "format_list_numbered",
            "label": "Format List Numbered"
        },
        {
            "class": "format_paint",
            "label": "Format Paint"
        },
        {
            "class": "format_quote",
            "label": "Format Quote"
        },
        {
            "class": "format_shapes",
            "label": "Format Shapes"
        },
        {
            "class": "format_size",
            "label": "Format Size"
        },
        {
            "class": "format_strikethrough",
            "label": "Format Strikethrough"
        },
        {
            "class": "format_textdirection_l_to_r",
            "label": "Format Textdirection L To R"
        },
        {
            "class": "format_textdirection_r_to_l",
            "label": "Format Textdirection R To L"
        },
        {
            "class": "format_underlined",
            "label": "Format Underlined"
        },
        {
            "class": "forum",
            "label": "Forum"
        },
        {
            "class": "forward",
            "label": "Forward"
        },
        {
            "class": "forward_10",
            "label": "Forward 10"
        },
        {
            "class": "forward_30",
            "label": "Forward 30"
        },
        {
            "class": "forward_5",
            "label": "Forward 5"
        },
        {
            "class": "free_breakfast",
            "label": "Free Breakfast"
        },
        {
            "class": "fullscreen",
            "label": "Fullscreen"
        },
        {
            "class": "fullscreen_exit",
            "label": "Fullscreen Exit"
        },
        {
            "class": "functions",
            "label": "Functions"
        },
        {
            "class": "g_translate",
            "label": "G Translate"
        },
        {
            "class": "gamepad",
            "label": "Gamepad"
        },
        {
            "class": "games",
            "label": "Games"
        },
        {
            "class": "gavel",
            "label": "Gavel"
        },
        {
            "class": "gesture",
            "label": "Gesture"
        },
        {
            "class": "get_app",
            "label": "Get App"
        },
        {
            "class": "gif",
            "label": "Gif"
        },
        {
            "class": "golf_course",
            "label": "Golf Course"
        },
        {
            "class": "gps_fixed",
            "label": "Gps Fixed"
        },
        {
            "class": "gps_not_fixed",
            "label": "Gps Not Fixed"
        },
        {
            "class": "gps_off",
            "label": "Gps Off"
        },
        {
            "class": "grade",
            "label": "Grade"
        },
        {
            "class": "gradient",
            "label": "Gradient"
        },
        {
            "class": "grain",
            "label": "Grain"
        },
        {
            "class": "graphic_eq",
            "label": "Graphic Eq"
        },
        {
            "class": "grid_off",
            "label": "Grid Off"
        },
        {
            "class": "grid_on",
            "label": "Grid On"
        },
        {
            "class": "group",
            "label": "Group"
        },
        {
            "class": "group_add",
            "label": "Group Add"
        },
        {
            "class": "group_work",
            "label": "Group Work"
        },
        {
            "class": "hd",
            "label": "Hd"
        },
        {
            "class": "hdr_off",
            "label": "Hdr Off"
        },
        {
            "class": "hdr_on",
            "label": "Hdr On"
        },
        {
            "class": "hdr_strong",
            "label": "Hdr Strong"
        },
        {
            "class": "hdr_weak",
            "label": "Hdr Weak"
        },
        {
            "class": "headset",
            "label": "Headset"
        },
        {
            "class": "headset_mic",
            "label": "Headset Mic"
        },
        {
            "class": "healing",
            "label": "Healing"
        },
        {
            "class": "hearing",
            "label": "Hearing"
        },
        {
            "class": "help",
            "label": "Help"
        },
        {
            "class": "help_outline",
            "label": "Help Outline"
        },
        {
            "class": "high_quality",
            "label": "High Quality"
        },
        {
            "class": "highlight",
            "label": "Highlight"
        },
        {
            "class": "highlight_off",
            "label": "Highlight Off"
        },
        {
            "class": "history",
            "label": "History"
        },
        {
            "class": "home",
            "label": "Home"
        },
        {
            "class": "hot_tub",
            "label": "Hot Tub"
        },
        {
            "class": "hotel",
            "label": "Hotel"
        },
        {
            "class": "hourglass_empty",
            "label": "Hourglass Empty"
        },
        {
            "class": "hourglass_full",
            "label": "Hourglass Full"
        },
        {
            "class": "http",
            "label": "Http"
        },
        {
            "class": "https",
            "label": "Https"
        },
        {
            "class": "image",
            "label": "Image"
        },
        {
            "class": "image_aspect_ratio",
            "label": "Image Aspect Ratio"
        },
        {
            "class": "import_contacts",
            "label": "Import Contacts"
        },
        {
            "class": "import_export",
            "label": "Import Export"
        },
        {
            "class": "important_devices",
            "label": "Important Devices"
        },
        {
            "class": "inbox",
            "label": "Inbox"
        },
        {
            "class": "indeterminate_check_box",
            "label": "Indeterminate Check Box"
        },
        {
            "class": "info",
            "label": "Info"
        },
        {
            "class": "info_outline",
            "label": "Info Outline"
        },
        {
            "class": "input",
            "label": "Input"
        },
        {
            "class": "insert_chart",
            "label": "Insert Chart"
        },
        {
            "class": "insert_comment",
            "label": "Insert Comment"
        },
        {
            "class": "insert_drive_file",
            "label": "Insert Drive File"
        },
        {
            "class": "insert_emoticon",
            "label": "Insert Emoticon"
        },
        {
            "class": "insert_invitation",
            "label": "Insert Invitation"
        },
        {
            "class": "insert_link",
            "label": "Insert Link"
        },
        {
            "class": "insert_photo",
            "label": "Insert Photo"
        },
        {
            "class": "invert_colors",
            "label": "Invert Colors"
        },
        {
            "class": "invert_colors_off",
            "label": "Invert Colors Off"
        },
        {
            "class": "iso",
            "label": "Iso"
        },
        {
            "class": "keyboard",
            "label": "Keyboard"
        },
        {
            "class": "keyboard_arrow_down",
            "label": "Keyboard Arrow Down"
        },
        {
            "class": "keyboard_arrow_left",
            "label": "Keyboard Arrow Left"
        },
        {
            "class": "keyboard_arrow_right",
            "label": "Keyboard Arrow Right"
        },
        {
            "class": "keyboard_arrow_up",
            "label": "Keyboard Arrow Up"
        },
        {
            "class": "keyboard_backspace",
            "label": "Keyboard Backspace"
        },
        {
            "class": "keyboard_capslock",
            "label": "Keyboard Capslock"
        },
        {
            "class": "keyboard_hide",
            "label": "Keyboard Hide"
        },
        {
            "class": "keyboard_return",
            "label": "Keyboard Return"
        },
        {
            "class": "keyboard_tab",
            "label": "Keyboard Tab"
        },
        {
            "class": "keyboard_voice",
            "label": "Keyboard Voice"
        },
        {
            "class": "kitchen",
            "label": "Kitchen"
        },
        {
            "class": "label",
            "label": "Label"
        },
        {
            "class": "label_outline",
            "label": "Label Outline"
        },
        {
            "class": "landscape",
            "label": "Landscape"
        },
        {
            "class": "language",
            "label": "Language"
        },
        {
            "class": "laptop",
            "label": "Laptop"
        },
        {
            "class": "laptop_chromebook",
            "label": "Laptop Chromebook"
        },
        {
            "class": "laptop_mac",
            "label": "Laptop Mac"
        },
        {
            "class": "laptop_windows",
            "label": "Laptop Windows"
        },
        {
            "class": "last_page",
            "label": "Last Page"
        },
        {
            "class": "launch",
            "label": "Launch"
        },
        {
            "class": "layers",
            "label": "Layers"
        },
        {
            "class": "layers_clear",
            "label": "Layers Clear"
        },
        {
            "class": "leak_add",
            "label": "Leak Add"
        },
        {
            "class": "leak_remove",
            "label": "Leak Remove"
        },
        {
            "class": "lens",
            "label": "Lens"
        },
        {
            "class": "library_add",
            "label": "Library Add"
        },
        {
            "class": "library_books",
            "label": "Library Books"
        },
        {
            "class": "library_music",
            "label": "Library Music"
        },
        {
            "class": "lightbulb_outline",
            "label": "Lightbulb Outline"
        },
        {
            "class": "line_style",
            "label": "Line Style"
        },
        {
            "class": "line_weight",
            "label": "Line Weight"
        },
        {
            "class": "linear_scale",
            "label": "Linear Scale"
        },
        {
            "class": "link",
            "label": "Link"
        },
        {
            "class": "linked_camera",
            "label": "Linked Camera"
        },
        {
            "class": "list",
            "label": "List"
        },
        {
            "class": "live_help",
            "label": "Live Help"
        },
        {
            "class": "live_tv",
            "label": "Live Tv"
        },
        {
            "class": "local_activity",
            "label": "Local Activity"
        },
        {
            "class": "local_airport",
            "label": "Local Airport"
        },
        {
            "class": "local_atm",
            "label": "Local Atm"
        },
        {
            "class": "local_bar",
            "label": "Local Bar"
        },
        {
            "class": "local_cafe",
            "label": "Local Cafe"
        },
        {
            "class": "local_car_wash",
            "label": "Local Car Wash"
        },
        {
            "class": "local_convenience_store",
            "label": "Local Convenience Store"
        },
        {
            "class": "local_dining",
            "label": "Local Dining"
        },
        {
            "class": "local_drink",
            "label": "Local Drink"
        },
        {
            "class": "local_florist",
            "label": "Local Florist"
        },
        {
            "class": "local_gas_station",
            "label": "Local Gas Station"
        },
        {
            "class": "local_grocery_store",
            "label": "Local Grocery Store"
        },
        {
            "class": "local_hospital",
            "label": "Local Hospital"
        },
        {
            "class": "local_hotel",
            "label": "Local Hotel"
        },
        {
            "class": "local_laundry_service",
            "label": "Local Laundry Service"
        },
        {
            "class": "local_library",
            "label": "Local Library"
        },
        {
            "class": "local_mall",
            "label": "Local Mall"
        },
        {
            "class": "local_movies",
            "label": "Local Movies"
        },
        {
            "class": "local_offer",
            "label": "Local Offer"
        },
        {
            "class": "local_parking",
            "label": "Local Parking"
        },
        {
            "class": "local_pharmacy",
            "label": "Local Pharmacy"
        },
        {
            "class": "local_phone",
            "label": "Local Phone"
        },
        {
            "class": "local_pizza",
            "label": "Local Pizza"
        },
        {
            "class": "local_play",
            "label": "Local Play"
        },
        {
            "class": "local_post_office",
            "label": "Local Post Office"
        },
        {
            "class": "local_printshop",
            "label": "Local Printshop"
        },
        {
            "class": "local_see",
            "label": "Local See"
        },
        {
            "class": "local_shipping",
            "label": "Local Shipping"
        },
        {
            "class": "local_taxi",
            "label": "Local Taxi"
        },
        {
            "class": "location_city",
            "label": "Location City"
        },
        {
            "class": "location_disabled",
            "label": "Location Disabled"
        },
        {
            "class": "location_off",
            "label": "Location Off"
        },
        {
            "class": "location_on",
            "label": "Location On"
        },
        {
            "class": "location_searching",
            "label": "Location Searching"
        },
        {
            "class": "lock",
            "label": "Lock"
        },
        {
            "class": "lock_open",
            "label": "Lock Open"
        },
        {
            "class": "lock_outline",
            "label": "Lock Outline"
        },
        {
            "class": "looks",
            "label": "Looks"
        },
        {
            "class": "looks_3",
            "label": "Looks 3"
        },
        {
            "class": "looks_4",
            "label": "Looks 4"
        },
        {
            "class": "looks_5",
            "label": "Looks 5"
        },
        {
            "class": "looks_6",
            "label": "Looks 6"
        },
        {
            "class": "looks_one",
            "label": "Looks One"
        },
        {
            "class": "looks_two",
            "label": "Looks Two"
        },
        {
            "class": "loop",
            "label": "Loop"
        },
        {
            "class": "loupe",
            "label": "Loupe"
        },
        {
            "class": "low_priority",
            "label": "Low Priority"
        },
        {
            "class": "loyalty",
            "label": "Loyalty"
        },
        {
            "class": "mail",
            "label": "Mail"
        },
        {
            "class": "mail_outline",
            "label": "Mail Outline"
        },
        {
            "class": "map",
            "label": "Map"
        },
        {
            "class": "markunread",
            "label": "Markunread"
        },
        {
            "class": "markunread_mailbox",
            "label": "Markunread Mailbox"
        },
        {
            "class": "memory",
            "label": "Memory"
        },
        {
            "class": "menu",
            "label": "Menu"
        },
        {
            "class": "merge_type",
            "label": "Merge Type"
        },
        {
            "class": "message",
            "label": "Message"
        },
        {
            "class": "mic",
            "label": "Mic"
        },
        {
            "class": "mic_none",
            "label": "Mic None"
        },
        {
            "class": "mic_off",
            "label": "Mic Off"
        },
        {
            "class": "mms",
            "label": "Mms"
        },
        {
            "class": "mode_comment",
            "label": "Mode Comment"
        },
        {
            "class": "mode_edit",
            "label": "Mode Edit"
        },
        {
            "class": "monetization_on",
            "label": "Monetization On"
        },
        {
            "class": "money_off",
            "label": "Money Off"
        },
        {
            "class": "monochrome_photos",
            "label": "Monochrome Photos"
        },
        {
            "class": "mood",
            "label": "Mood"
        },
        {
            "class": "mood_bad",
            "label": "Mood Bad"
        },
        {
            "class": "more",
            "label": "More"
        },
        {
            "class": "more_horiz",
            "label": "More Horiz"
        },
        {
            "class": "more_vert",
            "label": "More Vert"
        },
        {
            "class": "motorcycle",
            "label": "Motorcycle"
        },
        {
            "class": "mouse",
            "label": "Mouse"
        },
        {
            "class": "move_to_inbox",
            "label": "Move To Inbox"
        },
        {
            "class": "movie",
            "label": "Movie"
        },
        {
            "class": "movie_creation",
            "label": "Movie Creation"
        },
        {
            "class": "movie_filter",
            "label": "Movie Filter"
        },
        {
            "class": "multiline_chart",
            "label": "Multiline Chart"
        },
        {
            "class": "music_note",
            "label": "Music Note"
        },
        {
            "class": "music_video",
            "label": "Music Video"
        },
        {
            "class": "my_location",
            "label": "My Location"
        },
        {
            "class": "nature",
            "label": "Nature"
        },
        {
            "class": "nature_people",
            "label": "Nature People"
        },
        {
            "class": "navigate_before",
            "label": "Navigate Before"
        },
        {
            "class": "navigate_next",
            "label": "Navigate Next"
        },
        {
            "class": "navigation",
            "label": "Navigation"
        },
        {
            "class": "near_me",
            "label": "Near Me"
        },
        {
            "class": "network_cell",
            "label": "Network Cell"
        },
        {
            "class": "network_check",
            "label": "Network Check"
        },
        {
            "class": "network_locked",
            "label": "Network Locked"
        },
        {
            "class": "network_wifi",
            "label": "Network Wifi"
        },
        {
            "class": "new_releases",
            "label": "New Releases"
        },
        {
            "class": "next_week",
            "label": "Next Week"
        },
        {
            "class": "nfc",
            "label": "Nfc"
        },
        {
            "class": "no_encryption",
            "label": "No Encryption"
        },
        {
            "class": "no_sim",
            "label": "No Sim"
        },
        {
            "class": "not_interested",
            "label": "Not Interested"
        },
        {
            "class": "note",
            "label": "Note"
        },
        {
            "class": "note_add",
            "label": "Note Add"
        },
        {
            "class": "notifications",
            "label": "Notifications"
        },
        {
            "class": "notifications_active",
            "label": "Notifications Active"
        },
        {
            "class": "notifications_none",
            "label": "Notifications None"
        },
        {
            "class": "notifications_off",
            "label": "Notifications Off"
        },
        {
            "class": "notifications_paused",
            "label": "Notifications Paused"
        },
        {
            "class": "offline_pin",
            "label": "Offline Pin"
        },
        {
            "class": "ondemand_video",
            "label": "Ondemand Video"
        },
        {
            "class": "opacity",
            "label": "Opacity"
        },
        {
            "class": "open_in_browser",
            "label": "Open In Browser"
        },
        {
            "class": "open_in_new",
            "label": "Open In New"
        },
        {
            "class": "open_with",
            "label": "Open With"
        },
        {
            "class": "pages",
            "label": "Pages"
        },
        {
            "class": "pageview",
            "label": "Pageview"
        },
        {
            "class": "palette",
            "label": "Palette"
        },
        {
            "class": "pan_tool",
            "label": "Pan Tool"
        },
        {
            "class": "panorama",
            "label": "Panorama"
        },
        {
            "class": "panorama_fish_eye",
            "label": "Panorama Fish Eye"
        },
        {
            "class": "panorama_horizontal",
            "label": "Panorama Horizontal"
        },
        {
            "class": "panorama_vertical",
            "label": "Panorama Vertical"
        },
        {
            "class": "panorama_wide_angle",
            "label": "Panorama Wide Angle"
        },
        {
            "class": "party_mode",
            "label": "Party Mode"
        },
        {
            "class": "pause",
            "label": "Pause"
        },
        {
            "class": "pause_circle_filled",
            "label": "Pause Circle Filled"
        },
        {
            "class": "pause_circle_outline",
            "label": "Pause Circle Outline"
        },
        {
            "class": "payment",
            "label": "Payment"
        },
        {
            "class": "people",
            "label": "People"
        },
        {
            "class": "people_outline",
            "label": "People Outline"
        },
        {
            "class": "perm_camera_mic",
            "label": "Perm Camera Mic"
        },
        {
            "class": "perm_contact_calendar",
            "label": "Perm Contact Calendar"
        },
        {
            "class": "perm_data_setting",
            "label": "Perm Data Setting"
        },
        {
            "class": "perm_device_information",
            "label": "Perm Device Information"
        },
        {
            "class": "perm_identity",
            "label": "Perm Identity"
        },
        {
            "class": "perm_media",
            "label": "Perm Media"
        },
        {
            "class": "perm_phone_msg",
            "label": "Perm Phone Msg"
        },
        {
            "class": "perm_scan_wifi",
            "label": "Perm Scan Wifi"
        },
        {
            "class": "person",
            "label": "Person"
        },
        {
            "class": "person_add",
            "label": "Person Add"
        },
        {
            "class": "person_outline",
            "label": "Person Outline"
        },
        {
            "class": "person_pin",
            "label": "Person Pin"
        },
        {
            "class": "person_pin_circle",
            "label": "Person Pin Circle"
        },
        {
            "class": "personal_video",
            "label": "Personal Video"
        },
        {
            "class": "pets",
            "label": "Pets"
        },
        {
            "class": "phone",
            "label": "Phone"
        },
        {
            "class": "phone_android",
            "label": "Phone Android"
        },
        {
            "class": "phone_bluetooth_speaker",
            "label": "Phone Bluetooth Speaker"
        },
        {
            "class": "phone_forwarded",
            "label": "Phone Forwarded"
        },
        {
            "class": "phone_in_talk",
            "label": "Phone In Talk"
        },
        {
            "class": "phone_iphone",
            "label": "Phone Iphone"
        },
        {
            "class": "phone_locked",
            "label": "Phone Locked"
        },
        {
            "class": "phone_missed",
            "label": "Phone Missed"
        },
        {
            "class": "phone_paused",
            "label": "Phone Paused"
        },
        {
            "class": "phonelink",
            "label": "Phonelink"
        },
        {
            "class": "phonelink_erase",
            "label": "Phonelink Erase"
        },
        {
            "class": "phonelink_lock",
            "label": "Phonelink Lock"
        },
        {
            "class": "phonelink_off",
            "label": "Phonelink Off"
        },
        {
            "class": "phonelink_ring",
            "label": "Phonelink Ring"
        },
        {
            "class": "phonelink_setup",
            "label": "Phonelink Setup"
        },
        {
            "class": "photo",
            "label": "Photo"
        },
        {
            "class": "photo_album",
            "label": "Photo Album"
        },
        {
            "class": "photo_camera",
            "label": "Photo Camera"
        },
        {
            "class": "photo_filter",
            "label": "Photo Filter"
        },
        {
            "class": "photo_library",
            "label": "Photo Library"
        },
        {
            "class": "photo_size_select_actual",
            "label": "Photo Size Select Actual"
        },
        {
            "class": "photo_size_select_large",
            "label": "Photo Size Select Large"
        },
        {
            "class": "photo_size_select_small",
            "label": "Photo Size Select Small"
        },
        {
            "class": "picture_as_pdf",
            "label": "Picture As Pdf"
        },
        {
            "class": "picture_in_picture",
            "label": "Picture In Picture"
        },
        {
            "class": "picture_in_picture_alt",
            "label": "Picture In Picture Alt"
        },
        {
            "class": "pie_chart",
            "label": "Pie Chart"
        },
        {
            "class": "pie_chart_outlined",
            "label": "Pie Chart Outlined"
        },
        {
            "class": "pin_drop",
            "label": "Pin Drop"
        },
        {
            "class": "place",
            "label": "Place"
        },
        {
            "class": "play_arrow",
            "label": "Play Arrow"
        },
        {
            "class": "play_circle_filled",
            "label": "Play Circle Filled"
        },
        {
            "class": "play_circle_outline",
            "label": "Play Circle Outline"
        },
        {
            "class": "play_for_work",
            "label": "Play For Work"
        },
        {
            "class": "playlist_add",
            "label": "Playlist Add"
        },
        {
            "class": "playlist_add_check",
            "label": "Playlist Add Check"
        },
        {
            "class": "playlist_play",
            "label": "Playlist Play"
        },
        {
            "class": "plus_one",
            "label": "Plus One"
        },
        {
            "class": "poll",
            "label": "Poll"
        },
        {
            "class": "polymer",
            "label": "Polymer"
        },
        {
            "class": "pool",
            "label": "Pool"
        },
        {
            "class": "portable_wifi_off",
            "label": "Portable Wifi Off"
        },
        {
            "class": "portrait",
            "label": "Portrait"
        },
        {
            "class": "power",
            "label": "Power"
        },
        {
            "class": "power_input",
            "label": "Power Input"
        },
        {
            "class": "power_settings_new",
            "label": "Power Settings New"
        },
        {
            "class": "pregnant_woman",
            "label": "Pregnant Woman"
        },
        {
            "class": "present_to_all",
            "label": "Present To All"
        },
        {
            "class": "print",
            "label": "Print"
        },
        {
            "class": "priority_high",
            "label": "Priority High"
        },
        {
            "class": "public",
            "label": "Public"
        },
        {
            "class": "publish",
            "label": "Publish"
        },
        {
            "class": "query_builder",
            "label": "Query Builder"
        },
        {
            "class": "question_answer",
            "label": "Question Answer"
        },
        {
            "class": "queue",
            "label": "Queue"
        },
        {
            "class": "queue_music",
            "label": "Queue Music"
        },
        {
            "class": "queue_play_next",
            "label": "Queue Play Next"
        },
        {
            "class": "radio",
            "label": "Radio"
        },
        {
            "class": "radio_button_checked",
            "label": "Radio Button Checked"
        },
        {
            "class": "radio_button_unchecked",
            "label": "Radio Button Unchecked"
        },
        {
            "class": "rate_review",
            "label": "Rate Review"
        },
        {
            "class": "receipt",
            "label": "Receipt"
        },
        {
            "class": "recent_actors",
            "label": "Recent Actors"
        },
        {
            "class": "record_voice_over",
            "label": "Record Voice Over"
        },
        {
            "class": "redeem",
            "label": "Redeem"
        },
        {
            "class": "redo",
            "label": "Redo"
        },
        {
            "class": "refresh",
            "label": "Refresh"
        },
        {
            "class": "remove",
            "label": "Remove"
        },
        {
            "class": "remove_circle",
            "label": "Remove Circle"
        },
        {
            "class": "remove_circle_outline",
            "label": "Remove Circle Outline"
        },
        {
            "class": "remove_from_queue",
            "label": "Remove From Queue"
        },
        {
            "class": "remove_red_eye",
            "label": "Remove Red Eye"
        },
        {
            "class": "remove_shopping_cart",
            "label": "Remove Shopping Cart"
        },
        {
            "class": "reorder",
            "label": "Reorder"
        },
        {
            "class": "repeat",
            "label": "Repeat"
        },
        {
            "class": "repeat_one",
            "label": "Repeat One"
        },
        {
            "class": "replay",
            "label": "Replay"
        },
        {
            "class": "replay_10",
            "label": "Replay 10"
        },
        {
            "class": "replay_30",
            "label": "Replay 30"
        },
        {
            "class": "replay_5",
            "label": "Replay 5"
        },
        {
            "class": "reply",
            "label": "Reply"
        },
        {
            "class": "reply_all",
            "label": "Reply All"
        },
        {
            "class": "report",
            "label": "Report"
        },
        {
            "class": "report_problem",
            "label": "Report Problem"
        },
        {
            "class": "restaurant",
            "label": "Restaurant"
        },
        {
            "class": "restaurant_menu",
            "label": "Restaurant Menu"
        },
        {
            "class": "restore",
            "label": "Restore"
        },
        {
            "class": "restore_page",
            "label": "Restore Page"
        },
        {
            "class": "ring_volume",
            "label": "Ring Volume"
        },
        {
            "class": "room",
            "label": "Room"
        },
        {
            "class": "room_service",
            "label": "Room Service"
        },
        {
            "class": "rotate_90_degrees_ccw",
            "label": "Rotate 90 Degrees Ccw"
        },
        {
            "class": "rotate_left",
            "label": "Rotate Left"
        },
        {
            "class": "rotate_right",
            "label": "Rotate Right"
        },
        {
            "class": "rounded_corner",
            "label": "Rounded Corner"
        },
        {
            "class": "router",
            "label": "Router"
        },
        {
            "class": "rowing",
            "label": "Rowing"
        },
        {
            "class": "rss_feed",
            "label": "Rss Feed"
        },
        {
            "class": "rv_hookup",
            "label": "Rv Hookup"
        },
        {
            "class": "satellite",
            "label": "Satellite"
        },
        {
            "class": "save",
            "label": "Save"
        },
        {
            "class": "scanner",
            "label": "Scanner"
        },
        {
            "class": "schedule",
            "label": "Schedule"
        },
        {
            "class": "school",
            "label": "School"
        },
        {
            "class": "screen_lock_landscape",
            "label": "Screen Lock Landscape"
        },
        {
            "class": "screen_lock_portrait",
            "label": "Screen Lock Portrait"
        },
        {
            "class": "screen_lock_rotation",
            "label": "Screen Lock Rotation"
        },
        {
            "class": "screen_rotation",
            "label": "Screen Rotation"
        },
        {
            "class": "screen_share",
            "label": "Screen Share"
        },
        {
            "class": "sd_card",
            "label": "Sd Card"
        },
        {
            "class": "sd_storage",
            "label": "Sd Storage"
        },
        {
            "class": "search",
            "label": "Search"
        },
        {
            "class": "security",
            "label": "Security"
        },
        {
            "class": "select_all",
            "label": "Select All"
        },
        {
            "class": "send",
            "label": "Send"
        },
        {
            "class": "sentiment_dissatisfied",
            "label": "Sentiment Dissatisfied"
        },
        {
            "class": "sentiment_neutral",
            "label": "Sentiment Neutral"
        },
        {
            "class": "sentiment_satisfied",
            "label": "Sentiment Satisfied"
        },
        {
            "class": "sentiment_very_dissatisfied",
            "label": "Sentiment Very Dissatisfied"
        },
        {
            "class": "sentiment_very_satisfied",
            "label": "Sentiment Very Satisfied"
        },
        {
            "class": "settings",
            "label": "Settings"
        },
        {
            "class": "settings_applications",
            "label": "Settings Applications"
        },
        {
            "class": "settings_backup_restore",
            "label": "Settings Backup Restore"
        },
        {
            "class": "settings_bluetooth",
            "label": "Settings Bluetooth"
        },
        {
            "class": "settings_brightness",
            "label": "Settings Brightness"
        },
        {
            "class": "settings_cell",
            "label": "Settings Cell"
        },
        {
            "class": "settings_ethernet",
            "label": "Settings Ethernet"
        },
        {
            "class": "settings_input_antenna",
            "label": "Settings Input Antenna"
        },
        {
            "class": "settings_input_component",
            "label": "Settings Input Component"
        },
        {
            "class": "settings_input_composite",
            "label": "Settings Input Composite"
        },
        {
            "class": "settings_input_hdmi",
            "label": "Settings Input Hdmi"
        },
        {
            "class": "settings_input_svideo",
            "label": "Settings Input Svideo"
        },
        {
            "class": "settings_overscan",
            "label": "Settings Overscan"
        },
        {
            "class": "settings_phone",
            "label": "Settings Phone"
        },
        {
            "class": "settings_power",
            "label": "Settings Power"
        },
        {
            "class": "settings_remote",
            "label": "Settings Remote"
        },
        {
            "class": "settings_system_daydream",
            "label": "Settings System Daydream"
        },
        {
            "class": "settings_voice",
            "label": "Settings Voice"
        },
        {
            "class": "share",
            "label": "Share"
        },
        {
            "class": "shop",
            "label": "Shop"
        },
        {
            "class": "shop_two",
            "label": "Shop Two"
        },
        {
            "class": "shopping_basket",
            "label": "Shopping Basket"
        },
        {
            "class": "shopping_cart",
            "label": "Shopping Cart"
        },
        {
            "class": "short_text",
            "label": "Short Text"
        },
        {
            "class": "show_chart",
            "label": "Show Chart"
        },
        {
            "class": "shuffle",
            "label": "Shuffle"
        },
        {
            "class": "signal_cellular_4_bar",
            "label": "Signal Cellular 4 Bar"
        },
        {
            "class": "signal_cellular_connected_no_internet_4_bar",
            "label": "Signal Cellular Connected No Internet 4 Bar"
        },
        {
            "class": "signal_cellular_no_sim",
            "label": "Signal Cellular No Sim"
        },
        {
            "class": "signal_cellular_null",
            "label": "Signal Cellular Null"
        },
        {
            "class": "signal_cellular_off",
            "label": "Signal Cellular Off"
        },
        {
            "class": "signal_wifi_4_bar",
            "label": "Signal Wifi 4 Bar"
        },
        {
            "class": "signal_wifi_4_bar_lock",
            "label": "Signal Wifi 4 Bar Lock"
        },
        {
            "class": "signal_wifi_off",
            "label": "Signal Wifi Off"
        },
        {
            "class": "sim_card",
            "label": "Sim Card"
        },
        {
            "class": "sim_card_alert",
            "label": "Sim Card Alert"
        },
        {
            "class": "skip_next",
            "label": "Skip Next"
        },
        {
            "class": "skip_previous",
            "label": "Skip Previous"
        },
        {
            "class": "slideshow",
            "label": "Slideshow"
        },
        {
            "class": "slow_motion_video",
            "label": "Slow Motion Video"
        },
        {
            "class": "smartphone",
            "label": "Smartphone"
        },
        {
            "class": "smoke_free",
            "label": "Smoke Free"
        },
        {
            "class": "smoking_rooms",
            "label": "Smoking Rooms"
        },
        {
            "class": "sms",
            "label": "Sms"
        },
        {
            "class": "sms_failed",
            "label": "Sms Failed"
        },
        {
            "class": "snooze",
            "label": "Snooze"
        },
        {
            "class": "sort",
            "label": "Sort"
        },
        {
            "class": "sort_by_alpha",
            "label": "Sort By Alpha"
        },
        {
            "class": "spa",
            "label": "Spa"
        },
        {
            "class": "space_bar",
            "label": "Space Bar"
        },
        {
            "class": "speaker",
            "label": "Speaker"
        },
        {
            "class": "speaker_group",
            "label": "Speaker Group"
        },
        {
            "class": "speaker_notes",
            "label": "Speaker Notes"
        },
        {
            "class": "speaker_notes_off",
            "label": "Speaker Notes Off"
        },
        {
            "class": "speaker_phone",
            "label": "Speaker Phone"
        },
        {
            "class": "spellcheck",
            "label": "Spellcheck"
        },
        {
            "class": "star",
            "label": "Star"
        },
        {
            "class": "star_border",
            "label": "Star Border"
        },
        {
            "class": "star_half",
            "label": "Star Half"
        },
        {
            "class": "stars",
            "label": "Stars"
        },
        {
            "class": "stay_current_landscape",
            "label": "Stay Current Landscape"
        },
        {
            "class": "stay_current_portrait",
            "label": "Stay Current Portrait"
        },
        {
            "class": "stay_primary_landscape",
            "label": "Stay Primary Landscape"
        },
        {
            "class": "stay_primary_portrait",
            "label": "Stay Primary Portrait"
        },
        {
            "class": "stop",
            "label": "Stop"
        },
        {
            "class": "stop_screen_share",
            "label": "Stop Screen Share"
        },
        {
            "class": "storage",
            "label": "Storage"
        },
        {
            "class": "store",
            "label": "Store"
        },
        {
            "class": "store_mall_directory",
            "label": "Store Mall Directory"
        },
        {
            "class": "straighten",
            "label": "Straighten"
        },
        {
            "class": "streetview",
            "label": "Streetview"
        },
        {
            "class": "strikethrough_s",
            "label": "Strikethrough S"
        },
        {
            "class": "style",
            "label": "Style"
        },
        {
            "class": "subdirectory_arrow_left",
            "label": "Subdirectory Arrow Left"
        },
        {
            "class": "subdirectory_arrow_right",
            "label": "Subdirectory Arrow Right"
        },
        {
            "class": "subject",
            "label": "Subject"
        },
        {
            "class": "subscriptions",
            "label": "Subscriptions"
        },
        {
            "class": "subtitles",
            "label": "Subtitles"
        },
        {
            "class": "subway",
            "label": "Subway"
        },
        {
            "class": "supervisor_account",
            "label": "Supervisor Account"
        },
        {
            "class": "surround_sound",
            "label": "Surround Sound"
        },
        {
            "class": "swap_calls",
            "label": "Swap Calls"
        },
        {
            "class": "swap_horiz",
            "label": "Swap Horiz"
        },
        {
            "class": "swap_vert",
            "label": "Swap Vert"
        },
        {
            "class": "swap_vertical_circle",
            "label": "Swap Vertical Circle"
        },
        {
            "class": "switch_camera",
            "label": "Switch Camera"
        },
        {
            "class": "switch_video",
            "label": "Switch Video"
        },
        {
            "class": "sync",
            "label": "Sync"
        },
        {
            "class": "sync_disabled",
            "label": "Sync Disabled"
        },
        {
            "class": "sync_problem",
            "label": "Sync Problem"
        },
        {
            "class": "system_update",
            "label": "System Update"
        },
        {
            "class": "system_update_alt",
            "label": "System Update Alt"
        },
        {
            "class": "tab",
            "label": "Tab"
        },
        {
            "class": "tab_unselected",
            "label": "Tab Unselected"
        },
        {
            "class": "tablet",
            "label": "Tablet"
        },
        {
            "class": "tablet_android",
            "label": "Tablet Android"
        },
        {
            "class": "tablet_mac",
            "label": "Tablet Mac"
        },
        {
            "class": "tag_faces",
            "label": "Tag Faces"
        },
        {
            "class": "tap_and_play",
            "label": "Tap And Play"
        },
        {
            "class": "terrain",
            "label": "Terrain"
        },
        {
            "class": "text_fields",
            "label": "Text Fields"
        },
        {
            "class": "text_format",
            "label": "Text Format"
        },
        {
            "class": "textsms",
            "label": "Textsms"
        },
        {
            "class": "texture",
            "label": "Texture"
        },
        {
            "class": "theaters",
            "label": "Theaters"
        },
        {
            "class": "thumb_down",
            "label": "Thumb Down"
        },
        {
            "class": "thumb_up",
            "label": "Thumb Up"
        },
        {
            "class": "thumbs_up_down",
            "label": "Thumbs Up Down"
        },
        {
            "class": "time_to_leave",
            "label": "Time To Leave"
        },
        {
            "class": "timelapse",
            "label": "Timelapse"
        },
        {
            "class": "timeline",
            "label": "Timeline"
        },
        {
            "class": "timer",
            "label": "Timer"
        },
        {
            "class": "timer_10",
            "label": "Timer 10"
        },
        {
            "class": "timer_3",
            "label": "Timer 3"
        },
        {
            "class": "timer_off",
            "label": "Timer Off"
        },
        {
            "class": "title",
            "label": "Title"
        },
        {
            "class": "toc",
            "label": "Toc"
        },
        {
            "class": "today",
            "label": "Today"
        },
        {
            "class": "toll",
            "label": "Toll"
        },
        {
            "class": "tonality",
            "label": "Tonality"
        },
        {
            "class": "touch_app",
            "label": "Touch App"
        },
        {
            "class": "toys",
            "label": "Toys"
        },
        {
            "class": "track_changes",
            "label": "Track Changes"
        },
        {
            "class": "traffic",
            "label": "Traffic"
        },
        {
            "class": "train",
            "label": "Train"
        },
        {
            "class": "tram",
            "label": "Tram"
        },
        {
            "class": "transfer_within_a_station",
            "label": "Transfer Within A Station"
        },
        {
            "class": "transform",
            "label": "Transform"
        },
        {
            "class": "translate",
            "label": "Translate"
        },
        {
            "class": "trending_down",
            "label": "Trending Down"
        },
        {
            "class": "trending_flat",
            "label": "Trending Flat"
        },
        {
            "class": "trending_up",
            "label": "Trending Up"
        },
        {
            "class": "tune",
            "label": "Tune"
        },
        {
            "class": "turned_in",
            "label": "Turned In"
        },
        {
            "class": "turned_in_not",
            "label": "Turned In Not"
        },
        {
            "class": "tv",
            "label": "Tv"
        },
        {
            "class": "unarchive",
            "label": "Unarchive"
        },
        {
            "class": "undo",
            "label": "Undo"
        },
        {
            "class": "unfold_less",
            "label": "Unfold Less"
        },
        {
            "class": "unfold_more",
            "label": "Unfold More"
        },
        {
            "class": "update",
            "label": "Update"
        },
        {
            "class": "usb",
            "label": "Usb"
        },
        {
            "class": "verified_user",
            "label": "Verified User"
        },
        {
            "class": "vertical_align_bottom",
            "label": "Vertical Align Bottom"
        },
        {
            "class": "vertical_align_center",
            "label": "Vertical Align Center"
        },
        {
            "class": "vertical_align_top",
            "label": "Vertical Align Top"
        },
        {
            "class": "vibration",
            "label": "Vibration"
        },
        {
            "class": "video_call",
            "label": "Video Call"
        },
        {
            "class": "video_label",
            "label": "Video Label"
        },
        {
            "class": "video_library",
            "label": "Video Library"
        },
        {
            "class": "videocam",
            "label": "Videocam"
        },
        {
            "class": "videocam_off",
            "label": "Videocam Off"
        },
        {
            "class": "videogame_asset",
            "label": "Videogame Asset"
        },
        {
            "class": "view_agenda",
            "label": "View Agenda"
        },
        {
            "class": "view_array",
            "label": "View Array"
        },
        {
            "class": "view_carousel",
            "label": "View Carousel"
        },
        {
            "class": "view_column",
            "label": "View Column"
        },
        {
            "class": "view_comfy",
            "label": "View Comfy"
        },
        {
            "class": "view_compact",
            "label": "View Compact"
        },
        {
            "class": "view_day",
            "label": "View Day"
        },
        {
            "class": "view_headline",
            "label": "View Headline"
        },
        {
            "class": "view_list",
            "label": "View List"
        },
        {
            "class": "view_module",
            "label": "View Module"
        },
        {
            "class": "view_quilt",
            "label": "View Quilt"
        },
        {
            "class": "view_stream",
            "label": "View Stream"
        },
        {
            "class": "view_week",
            "label": "View Week"
        },
        {
            "class": "vignette",
            "label": "Vignette"
        },
        {
            "class": "visibility",
            "label": "Visibility"
        },
        {
            "class": "visibility_off",
            "label": "Visibility Off"
        },
        {
            "class": "voice_chat",
            "label": "Voice Chat"
        },
        {
            "class": "voicemail",
            "label": "Voicemail"
        },
        {
            "class": "volume_down",
            "label": "Volume Down"
        },
        {
            "class": "volume_mute",
            "label": "Volume Mute"
        },
        {
            "class": "volume_off",
            "label": "Volume Off"
        },
        {
            "class": "volume_up",
            "label": "Volume Up"
        },
        {
            "class": "vpn_key",
            "label": "Vpn Key"
        },
        {
            "class": "vpn_lock",
            "label": "Vpn Lock"
        },
        {
            "class": "wallpaper",
            "label": "Wallpaper"
        },
        {
            "class": "warning",
            "label": "Warning"
        },
        {
            "class": "watch",
            "label": "Watch"
        },
        {
            "class": "watch_later",
            "label": "Watch Later"
        },
        {
            "class": "wb_auto",
            "label": "Wb Auto"
        },
        {
            "class": "wb_cloudy",
            "label": "Wb Cloudy"
        },
        {
            "class": "wb_incandescent",
            "label": "Wb Incandescent"
        },
        {
            "class": "wb_iridescent",
            "label": "Wb Iridescent"
        },
        {
            "class": "wb_sunny",
            "label": "Wb Sunny"
        },
        {
            "class": "wc",
            "label": "Wc"
        },
        {
            "class": "web",
            "label": "Web"
        },
        {
            "class": "web_asset",
            "label": "Web Asset"
        },
        {
            "class": "weekend",
            "label": "Weekend"
        },
        {
            "class": "whatshot",
            "label": "Whatshot"
        },
        {
            "class": "widgets",
            "label": "Widgets"
        },
        {
            "class": "wifi",
            "label": "Wifi"
        },
        {
            "class": "wifi_lock",
            "label": "Wifi Lock"
        },
        {
            "class": "wifi_tethering",
            "label": "Wifi Tethering"
        },
        {
            "class": "work",
            "label": "Work"
        },
        {
            "class": "wrap_text",
            "label": "Wrap Text"
        },
        {
            "class": "youtube_searched_for",
            "label": "Youtube Searched For"
        },
        {
            "class": "zoom_in",
            "label": "Zoom In"
        },
        {
            "class": "zoom_out",
            "label": "Zoom Out"
        },
        {
            "class": "zoom_out_map",
            "label": "Zoom Out Map"
        }
    ]

    constructor() {
    }

    getIcons() {
        // let arraIcons = [];
        //
        // Object.keys(this.icons).forEach((key) => {
        //     arraIcons.push({
        //         'class': this.icons[key].name.toLocaleLowerCase().replace(/ /g, '_'),
        //         label: this.icons[key].name
        //     })
        // });

        return this.icons;
    }
}
